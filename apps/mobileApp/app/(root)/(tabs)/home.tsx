import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import avatarUser from "@/assets/images/avatarUser.jpeg"
import { icons, images, latestOffers } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import LatestOffers from "@/components/LatestOffers";
import { insuredProducts } from "@/constants";

const numColumns = 4;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns - 20;

const Home = () => {

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7">

                {/* Header */}
                <View className="flex flex-row items-center justify-between mt-5">
                    {/* first coloum */}
                    <View className="flex flex-row">
                        <Image source={avatarUser} className="rounded-full size-16" />

                        <View className="flex flex-col items-start ml-4 justify-start">
                            <Text className="bold-16 font-JakartaBold text-black-100">
                                Amitav Panda
                            </Text>
                            <Text className="regular-14 font-JakartaMedium text-black-100 py-1">Welocome Back</Text>
                        </View>
                    </View>

                    {/* second coloum */}
                    <View className="flex flex-row items-center justify-between gap-3">
                        <Image source={icons.bell} className="size-8" />
                        <Image source={icons.phone} className="size-8" />
                    </View>
                </View>

                {/* Second part */}

                <View className="rounded-3xl overflow-hidden bg-opacity-60 my-6 h-[300px]">
                    {/* Background Image */}
                    <Image
                        source={images.CarInsuranceBanner} // Replace with the path to your background image.
                        className="absolute inset-0 w-full h-full"
                        style={{ opacity: 0.8 }}
                    />

                    {/* Overlay Text and Button */}
                    <View className="flex flex-col justify-center items-center p-6 gap-y-2">
                        {/* Promotion Text */}
                        <Text className="bold-32 font-JakartaBold text-white text-center mb-4">
                            Get your Car Insurance instantly
                        </Text>

                        <Text className="bold-32 font-JakartaBold text-white text-center mb-4">
                        </Text>

                        <Text className="bold-32 font-JakartaBold text-white text-center mb-4">
                        </Text>
                        {/* Button */}
                        <CustomButton
                            title="View Plans"
                            className="py-3 px-6 rounded-md bg-black-90"
                            onPress={() => router.replace("/(root)/(insurance)/CarInsurance")}
                        />
                    </View>
                </View>

                {/* Latest Offers */}
                <View className="flex flex-col items-start justify-center">
                    <Text className="text-gray-50">Latest Offers -----</Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-2">

                        <View className="mt-2 flex flex-row items-center justify-center gap-2">
                            {latestOffers.map((offer, index) => (
                                <View className="w-[500px]">
                                    <LatestOffers offer={offer} />
                                </View>
                            ))}
                        </View>

                    </ScrollView>
                </View>

                {/* All Insurance Products */}
                <View className="flex flex-col items-start justify-center mt-6">
                    <Text className="text-gray-50">All Insurance Products -----</Text>
                    <View className="flex flex-wrap flex-row justify-center gap-5">
                        {insuredProducts.map((product, index) => (
                            <View key={index} className="flex flex-col items-center justify-center m-2" style={{ width: itemWidth }}>
                                <TouchableOpacity onPress={() => router.replace(product.path as any)} className="flex items-center justify-center p-4 bg-white rounded-md shadow-md"                                     style={{
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 3,
                                        elevation: 5,
                                    }}>
                                    <Image source={product.icon} className='w-[64px] h-[64px] rounded-md' />
                                </TouchableOpacity>
                                <Text className='text-black-100 regular-14 mt-2 text-center'>{product.title}</Text>
                            </View>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;