import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import { useUser } from "@/context/userContext";
import axios from "axios";
import { useRef } from "react";


const OtpVerification = () => {
    const [form, setForm] = useState({
        otp: "",
        fullHash: ""
    });
    const otpInputRef = useRef<{ focus: () => void }>(null);


    const [isResending, setIsResending] = useState(false); // To manage resend button state
    const { userData, setUserData } = useUser() as UserContextType; // Access user data from context

    interface UserData {
        phoneNumber: string;
        hash: string;
        ifUserExists: boolean;
    }

    interface UserContextType {
        userData: UserData;
        setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    }

    // Function to handle OTP verification
    const handleVerifyOtp = async () => {
        console.log("Form Values: ", form); // Log the form state
        console.log("User Data: ", userData); // Log user data from context

        const fullHash = form.fullHash || userData.hash;
        if (form.otp.trim() && userData.phoneNumber) {
            try {

                const requestBody = {
                    otp: form.otp,
                    phoneNumber: userData.phoneNumber,
                    fullHash: fullHash // Fetch hash directly from context
                };

                console.log("Request Body: ", requestBody);
                const response = await axios.post('http://10.0.2.2:4000/otpVerification', {
                    otp: form.otp,
                    phoneNumber: userData.phoneNumber,
                    fullHash: fullHash // Use the updated or initial hash
                });



                const { success, message, ifIsExpire } = response.data;

                if (ifIsExpire) {
                    Alert.alert(
                        "Expired OTP",
                        "Your OTP has expired. Please resend OTP to verify.",
                        [
                            {
                                text: "Resend OTP",
                                onPress: () => handleResendOtp() // Resend OTP
                            },
                            {
                                text: "Cancel",
                                style: "cancel"
                            }
                        ]
                    );
                } else if (success) {
                    Alert.alert(
                        "Login Successful",
                        "You are logged in successfully!",
                        [
                            {
                                text: "Go to Home",
                                onPress: () => router.replace("/(root)/(tabs)/home"),
                            }
                        ]
                    );
                } else {
                    Alert.alert("Error", "Invalid OTP. Please try again.",
                        [
                            {
                                text: "Resend OTP",
                                onPress: () => handleResendOtp() // Resend OTP
                            },
                            {
                                text: "Cancel",
                                style: "cancel"
                            }
                        ]
                    );
                }
            } catch (err) {
                console.error("Error in verification:", err);
                Alert.alert("Error", "Unable to verify OTP. Please try again.");
            }
        } else {
            Alert.alert("Validation Error", "Please fill out all fields.");
        }
    };

    // Function to handle resending OTP
    const handleResendOtp = async () => {
        setIsResending(true); // Start loading state

        try {
            const response = await axios.post('http://10.0.2.2:4000/resendOtp', {
                phoneNumber: userData.phoneNumber,
            });

            const { success, hash } = response.data;

            if (success) {

                setUserData({
                    phoneNumber: userData.phoneNumber,
                    hash: hash,
                    ifUserExists: false,
                });
                setForm({ ...form, otp: "" }); // Clear only the otp field
                otpInputRef.current?.focus(); // Focus on the input field
                Alert.alert("OTP Sent", "A new OTP has been sent to your phone.");
            } else {
                Alert.alert("Error", "Failed to resend OTP. Please try again.");
            }
        } catch (err) {
            console.error("Error resending OTP:", err);
            Alert.alert("Error", "Unable to resend OTP. Please try again.");
        } finally {
            setIsResending(false); // Stop loading state
        }
    };


    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signup} className="z-0 w-full h-[250px]" />
                    <Text className="text-3xl text-white font-JakartaBold absolute bottom-5 left-5">Verify your OTP</Text>
                </View>

                <View className="p-5">
                    <InputField
                        ref={otpInputRef} // Attach the ref
                        label="OTP"
                        placeholder="Enter OTP"
                        icon={icons.person}
                        value={form.otp}
                        onChangeText={(value) => setForm({ ...form, otp: value })}
                    />
                    <CustomButton title="Verify" className="mt-6" onPress={handleVerifyOtp} />
                    <CustomButton
                        title={isResending ? "Resending..." : "Resend OTP"}
                        className="mt-4"
                        onPress={handleResendOtp}
                        disabled={isResending} // Disable button during resending
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default OtpVerification;
