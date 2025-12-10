import { icons } from "@/constants/navIcons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import IconsNav from "./components/IconsNav";

export const options = { headerShown: false };

const Category = () => {
  const { id, name } = useLocalSearchParams();
  const idStr = Array.isArray(id) ? id[0] : id;
  const nameStr = Array.isArray(name) ? name[0] : name;

  // Find the icon object from your icons array
  const iconObj = icons.find((item) => item.id.toString() === idStr)?.icon;

  return (
    <View className="flex-1 bg-black items-center justify-center px-5">
      <View className=" w-[80%]">
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />

        {/* Icon */}
        {iconObj && (
          <View className="items-center mt-12">
            <IconsNav icon={iconObj} />
          </View>
        )}

        {/* Category Name */}
        <View className="items-center mt-8">
          <Text className="text-3xl text-white font-extrabold">{nameStr}</Text>
        </View>

        {/* Category ID */}
        <View className="items-center mt-4">
          <Text className="text-lg text-gray-300">ID: {idStr}</Text>
        </View>

        {/* Description  */}
        <View className="mt-8 bg-white rounded-xl p-5 shadow-md">
          <Text className="text-gray-800 text-base leading-6">
            Pulled Data will display here
          </Text>
        </View>

        {/*  additional content */}
        <View className="items-center mt-6">
          <Text className="text-gray-400 italic">
            More content coming soon...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Category;
