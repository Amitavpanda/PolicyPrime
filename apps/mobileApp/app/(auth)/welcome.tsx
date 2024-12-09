import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Swiper from "react-native-swiper"


const Onboarding = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<Swiper>(null);

    const isLastSlide = activeIndex === onboarding.length - 1;

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">

            <TouchableOpacity onPress={() => {
                router.replace("/(auth)/sign-up");
            }}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={
                    <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
                }
                activeDot={
                    <View className="w-[32px] h-[4px] mx-1 bg-[#6300cc] rounded-full" />
                }
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item, index) => (
                    <View key={item.id} className="flex items-center justify-center p-5">
                        <Image source={item.image} className="w-full h-[350px]" resizeMode="contain"/>
                        <View className="flex flex-row justify-center items-center w-full mt-5">
                            <Text className="text-black text-3xl font-bold mx-10 text-center">
                                {item.title}
                            </Text>

                        </View>
                        <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                            {item.description}
                        </Text>
                    </View>
                )

                )}
            </Swiper>
                
            <CustomButton title={isLastSlide ? "Get Started" : "Next"}
                onPress={
                    () => isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)
                }
                className="w-11/12 mt-6 mb-5"
            />

            

        </SafeAreaView>
    )
}

export default Onboarding;