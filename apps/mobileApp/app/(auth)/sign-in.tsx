import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"



const SignIn = () => {
    const [form, setForm] = useState({
        phoneNumber : ""
    })

    const handleRegister = () => {
        if (form.phoneNumber.trim()) {
          router.push("/otp-verification"); 
        } else {
          alert("Please fill out all fields");
        }
      };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signup} className="z-0 w-full h-[250px]"/>
                    <Text className="text-3xl text-white font-JakartaBold absolute bottom-5 left-5">Welcome</Text>
                </View>

                <View className="p-5">
                    <InputField label="Phone Number" placeholder="Enter Phone Number" icon={icons.phone} value={form.phoneNumber} onChangeText={(value) => setForm({...form, phoneNumber : value})}/>
                    <CustomButton title="Register" className="mt-6" onPress={handleRegister}/>

                    <Link href="/sign-up" className="text-lg text-center mt-10">
                        Don't have an account?{" "}
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn;