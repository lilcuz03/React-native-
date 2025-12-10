import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
interface props {
  focused: boolean;
  title: string;
  icon: ImageSourcePropType;
  // icon: string;
}
const TabsRoute = () => {
  const Tab = ({ focused, title, icon }: props) => (
    <View className="flex-row  min-w-14 w-[112px] justify-center items-center rounded-full min-h-[40px] overflow-hidden ">
      {focused ? (
        <ImageBackground
          source={images.bg}
          className="flex-row  min-w-14 w-[112px] justify-center items-center rounded-full min-h-[70px] overflow-hidden"
        >
          <View className=" flex-1 flex-row  w-full h-full rounded-full min-h-20 overflow-hidden min-w-36 justify-center items-center gap-x-2">
            <Image
              source={icon}
              className=" w-6 h-6 justify-center mt-3 "
            />

            <Text className="text-white mt-2 ">{title}</Text>
          </View>
        </ImageBackground>
      ) : (
        <Text className="text-gray-500 mt-2 ">{title}</Text>
      )}
    </View>
  );
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // shadowColor: "black",
          position: "absolute",
          marginHorizontal: 20,
          marginBottom: 40,
          borderColor: "",

          height: 50,
          borderRadius: 40,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: "center",
          },
          tabBarIcon: ({ focused }) => (
            <Tab
              focused={focused}
              title="Home"
              icon={images.home}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: "center",
          },
          tabBarIcon: ({ focused }) => (
            <Tab
              focused={focused}
              title="Search"
              icon={images.search}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: "center",
          },
          tabBarIcon: ({ focused }) => (
            <Tab
              focused={focused}
              title="Profile"
              icon={images.person}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsRoute;

const styles = StyleSheet.create({});
