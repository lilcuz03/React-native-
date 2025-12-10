import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const TopRated = () => {
  return (
    <>
      <View>
        <Text className="text-black mb-5 text-2xl">Top Rated</Text>
      </View>
      <ScrollView
        horizontal
        className=" min-w-auto min-h-[200px] rounded-xl bg-black p-4"
      >
        <View className="h-[200px] bg-white w-[400px]">
          <Text className="text-black mb-5 text-2xl">Wabalab </Text>
        </View>
        <View className="h-[200px] bg-white w-full mx-5">
          <Text className="text-black mb-5 w-full text-2xl">2</Text>
        </View>
        <View className="h-[200px] bg-white w-full mx-5">
          <Text className="text-black mb-5 w-full text-2xl">2</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default TopRated;

const styles = StyleSheet.create({});
