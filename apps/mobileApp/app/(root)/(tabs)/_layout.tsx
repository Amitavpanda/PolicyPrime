import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, Text } from "react-native";

import { icons } from "@/constants";


const TabIcon = ({
  source,
  focused,
  title,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  title: string;
}) => (
  <View className="flex flex-col justify-center items-center">
    <View
      className={`rounded-full w-10 h-10 items-center justify-center ${focused ? "bg-green-50" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-5 h-5"
      />
    </View>
    <Text
        className={`mt-1 text-white text-[9px]`}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
);

export default function Layout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 30,
          overflow: "hidden",
          marginHorizontal: 3,
          marginBottom: 20,
          height: 78,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        }
      }}

    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.HomeIcon} focused={focused} title="Home" />
          ),
        }}

      />
      <Tabs.Screen
        name="claims"
        options={{
          title: "Claims",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.ClaimsIcon} focused={focused} title="Claims" />
          ),
        }}
      />
      <Tabs.Screen
        name="policies"
        options={{
          title: "Policies",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.PoliciesIcon} focused={focused} title="Policies" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.AccountIcon} focused={focused} title="Account" />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.HelpIcon} focused={focused} title="Help" />
          ),
        }}
      />
    </Tabs>
  );
}