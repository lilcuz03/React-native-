import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PromoCard = () => {
  return (
    <View className="w-[200px] h-[120px] bg-black rounded-md mr-8 my-3 p-3 justify-center items-center">
      <Text className=" flex justify-center items-center text-white ">
        {" "}
        Grab this offer before it ends! Limited time only.
      </Text>
    </View>
  );
};

export default PromoCard;

const styles = StyleSheet.create({});
