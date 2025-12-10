import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Promo = () => {
  return (
    <>
      <View className="flex-1 min-h-screen ">
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <View className="justify-center items-center">
          <Text className="text-2xl">Promo</Text>
        </View>
        <View className="justify-center items-center">
          <Text className="my-3">PROMO CARD Here</Text>
          <Text>Rest of the pulled data goes here</Text>
        </View>
      </View>
    </>
  );
};

export default Promo;

const styles = StyleSheet.create({});
