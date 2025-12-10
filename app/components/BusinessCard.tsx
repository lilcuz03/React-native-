// import { Add24Filled } from "@fluentui/react-icons";
import { Link, RelativePathString } from "expo-router";
import React from "react";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypesNamespace";

interface props {
  image: ImageSourcePropType;
  rating: Double;
  wishlist: boolean;
  ranking: number;
  title: string;
  key: number;
  link: RelativePathString;
}

const BusinessCard = ({
  image,
  key,
  rating,
  wishlist,
  ranking,
  title,
  link,
}: props) => {
  return (
    <Link
      href={link}
      className="w-[100%] min-h-[30%]  bg-black rounded-xl   justify-center items-center my-10"
    >
      <ImageBackground
        source={image}
        className="w-full h-full absolute rounded-xl overflow-hidden bg-black opacity-80 z-0"
      >
        <View className="w-full p-4 z-50 ">
          <Text className="text-white mt-3 text-xl text-right">{title}</Text>
          <Text className="w-full text-right text-xl text-white ">
            {/* {ranking}/99 */}
          </Text>
        </View>
        <View></View>
      </ImageBackground>
    </Link>
  );
};

export default BusinessCard;

// const styles = StyleSheet.create({});
