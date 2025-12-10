import React from "react";
import { StyleSheet, TextInput } from "react-native";
interface props {
  onchangeText: () => {};
  placeholder: string;
  value: string;
  secureText: boolean;
  bgColor: string;
  textColor: string;
}
const InputText = ({
  onchangeText,
  placeholder,
  value,
  secureText,
  bgColor,
  
  textColor = "text-white",
}: props) => {
  return (
    <TextInput
      onChangeText={onchangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="gray"
      secureTextEntry={secureText}
      className={`w-full flex-1  p-5 ${bgColor} ${textColor} justify-center items-center  rounded-full`}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({});
