import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import { Alert } from "react-native";
import axios from "axios"; 
import { useUser } from "@/context/userContext";


const SignIn = () => {
    const [form, setForm] = useState({
        phoneNumber : ""
    })
    const { setUserData } = useUser(); // Use context to set data

    const handleSignIn = async () => {
        if (form.phoneNumber.trim()) {
            try{
                const response = await axios.post('http://10.0.2.2:4000/login', {
                        phoneNumber : form.phoneNumber
                });
                
                const {success , ifUserExists, hash, phoneNumber } = response.data;

                if(!ifUserExists) {
                    setForm({ ...form, phoneNumber: "" }); // Clear only the phoneNumber field
                    Alert.alert("Phone Number is not correct or user is not registered" , "Sign In Again or Register", [
                        {
                            text : "Register",
                            onPress : () => router.push("/sign-up")
                        },
                        {
                            text : "Sign In Again",
                            onPress : () => router.push("/sign-in")
                        }
                    ])
                }
                else if(success){
                    Alert.alert(
                        "OTP Sent",
                        `The OTP has been shared to ${phoneNumber}`,
                        [
                            {
                                text: "Verify OTP",
                                onPress: () => router.push("/otp-verification"),
                            }
                        ]
                    );

                    setUserData({
                        phoneNumber: phoneNumber,
                        hash: hash,
                        ifUserExists: true,
                    });

                }
                else {
                    Alert.alert("Error", "Something went wrong");
                }
            }

            catch(err){
                console.error("Error in sign in:", err);
                Alert.alert("Error", "Unable to sign in. Please try again.");
            }
        } else {
          Alert.alert("Validation Error", "Please fill out all fields.");
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
                    <CustomButton title="Sign In" className="mt-6" onPress={handleSignIn}/>

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