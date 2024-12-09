import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"



const OtpVerification = () => {
    const [form, setForm] = useState({
        otp : ""
    })



    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signup} className="z-0 w-full h-[250px]"/>
                    <Text className="text-3xl text-white font-JakartaBold absolute bottom-5 left-5">Verify your OTP</Text>
                </View>

                <View className="p-5">
                    <InputField label="OTP" placeholder="Enter OTP" icon={icons.person} value={form.otp} onChangeText={(value) => setForm({...form, otp : value})}/>
                    <CustomButton title="Verify" className="mt-6" />
                </View>
            </View>
        </ScrollView>
    )
}

export default OtpVerification;