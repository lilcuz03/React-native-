import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputText = () => {
  return (
    <View className="flex-row min-w-[90%] rounded-full justify-center items-center bg-black mx-20 h-[50px] mt-5">
      <TextInput
        value=""
        placeholder="Search Here "
        placeholderTextColor="gray"
        textAlign="center"
        onChangeText={() => {}}
        onKeyPress={() => {}}
        className="w-full"
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
