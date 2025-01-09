import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

import { icons } from "@/constants";


export default function Layout() {
    return (
        <Tabs
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="claims"
                options={{
                    title: "Claims",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="policies"
                options={{
                    title: "Policies",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="help"
                options={{
                    title: "Help",
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}