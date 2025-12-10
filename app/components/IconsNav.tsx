import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
interface props {
  icon: ImageSourcePropType;
  // link: RelativePathString;
  onPress: VoidFunction;
}
const IconsNav = ({ icon, onPress }: props) => {
  return (
    <TouchableOpacity
      className="mr-5"
      onPress={onPress}
    >
      <View className="bg-black rounded-full justify-center items-center w-[50px] h-[50px] ">
        <Image
          source={icon}
          className="w-6 h-6 "
        />
      </View>
    </TouchableOpacity>
  );
};

export default IconsNav;

const styles = StyleSheet.create({});
