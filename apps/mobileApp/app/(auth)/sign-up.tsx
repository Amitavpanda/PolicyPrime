import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import axios from "axios"; 
import { useUser } from "@/context/userContext";

const SignUp = () => {
    const [form, setForm] = useState({
        name : "",
        phoneNumber : ""
    })
    const { setUserData } = useUser(); // Use context to set data


    const handleRegister = async () => {
        if (form.name.trim() && form.phoneNumber.trim()) {
            try{
                const response = await axios.post('http://10.0.2.2:4000/register', {
                        name : form.name,
                        phoneNumber : form.phoneNumber

                });
                
                const {success , ifUserExists, hash, phoneNumber } = response.data;
                const data = response.data;


                if(ifUserExists) {
                    Alert.alert("User Already Exists" , "Please log in to continue", [
                        {
                            text : "Go to login",
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
                        phoneNumber: data.phoneNumber,
                        hash: data.hash,
                        ifUserExists: false,
                    });

                }
                else {
                    Alert.alert("Error", "Something went wrong");
                }
            }

            catch(err){
                console.error("Error in registration:", err);
                Alert.alert("Error", "Unable to register. Please try again.");
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
                    <Text className="text-3xl text-white font-JakartaBold absolute bottom-5 left-5">Create your account</Text>
                </View>

                <View className="p-5">
                    <InputField label="Name" placeholder="Enter name" icon={icons.person} value={form.name} onChangeText={(value) => setForm({...form, name : value})}/>
                    <InputField label="Phone Number" placeholder="Enter Phone Number" icon={icons.phone} value={form.phoneNumber} onChangeText={(value) => setForm({...form, phoneNumber : value})}/>
                    <CustomButton title="Register" className="mt-6" onPress={handleRegister}/>

                    <Link href="/sign-in" className="text-lg text-center mt-10">
                        Already have an account?{" "}
                        <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;

