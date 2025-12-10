import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* <Tabs.Screen
        name="login"
        options={{ headerShown: false }}
      /> */}
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
