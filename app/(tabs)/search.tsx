import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import BusinessCard from "../components/BusinessCard";
import InputText from "../components/InputText";

const Search = () => {
  const res = () => {
    const items = [];

    for (let i = 0; i < 5; i++) {
      items.push(
        <View className="w-[85%] h-[70px] mt-2 mb-3">
          <BusinessCard
            key={i}
            image={images.nandos}
            link="./"
            title="Nandos"
            ranking={4}
          />
        </View>
      );
    }

    return items;
  };
  return (
    <View className="flex-1 bg-primary">
      <StatusBar
        backgroundColor="yellow"
        barStyle="dark-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-5 mt-5"
      >
        {/* Header */}
        {/* <View className="w-full items-center my-8">
          <Image
            source={images.logo}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <Text className="text-white text-xl font-semibold mt-4">LAKKER</Text>
          <Text className="text-gray-400 text-sm">
            Discover • Rate • Connect
          </Text>
        </View> */}
        {/* Search Input */}

        <View className="my-5 min-h-[30px]">
          <InputText
            placeholder="Search for a service or business..."
            value=""
            bgColor="bg-black"
            secureText={false}
            onchangeText={() => {}}
          />
        </View>
        {/* Filter Categories */}
        <View className="h-[60px] mb-5">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="p-2"
          >
            <View className="bg-black rounded-full justify-center items-center w-[70px] h-[50px] mr-5">
              <Text className="text-white text-sm">All</Text>
            </View>
            <View className="bg-black rounded-full justify-center items-center w-[70px] h-[50px] mr-5">
              <Text className="text-white text-sm">Food</Text>
            </View>
            <View className="bg-black rounded-full justify-center items-center w-[70px] h-[50px] mr-5">
              <Text className="text-white text-sm">Beauty</Text>
            </View>
            <View className="bg-black rounded-full justify-center items-center w-[90px] h-[50px] mr-5">
              <Text className="text-white text-sm">Services</Text>
            </View>
            <View className="bg-black rounded-full justify-center items-center w-[80px] h-[50px] mr-5">
              <Text className="text-white text-sm">Shops</Text>
            </View>
          </ScrollView>
        </View>
        {/* Search Results */}
        <View className=" flex w-full justify-center items-center ">
          <Image
            source={images.search}
            className=" justify-center items-center  w-12 h-12"
          />
        </View>

        <View className="justify-center items-center">
          <Text className="text-[20px] text-black font-semibold">
            Search Results
          </Text>
        </View>
        <View className="flex justify-center items-center my-3">
          <Text>Search Results Goes Here</Text>
        </View>

        <View className="flex justify-center items-center"></View>
        <View className="mt-10 mb-16 items-center">
          <Text className="text-gray-400 text-xs">
            © 2025 Lakker Application — All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
