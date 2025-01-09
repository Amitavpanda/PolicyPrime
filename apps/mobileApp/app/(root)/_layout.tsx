import { Stack, Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { icons } from "@/constants";


export default function Layout() {
    return (
       <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       </Stack>
    );
}