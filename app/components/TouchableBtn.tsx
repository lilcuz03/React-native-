import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface props {
  btnText: string;
  btnColor: string;
  onPress: () => {};
}
const TouchableBtn = ({ btnText, onPress, btnColor = "bg-white" }: props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` ${btnColor} w-[80%] h-[50px] mt-10 rounded-full justify-center items-center`}
    >
      <Text>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default TouchableBtn;

const styles = StyleSheet.create({});
