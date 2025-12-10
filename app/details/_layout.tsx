import { Tabs, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ImageSourcePropType, StyleSheet, Text } from "react-native";
interface props {
  focused: boolean;
  title: string;
  icon: ImageSourcePropType;
  // icon: string;
}

const DetailsRoute = () => {
  const { id } = useLocalSearchParams();
  const [tabname, setTabname] = useState(id);

  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          display: "none",
          // shadowColor: "black",
          position: "absolute",
          marginHorizontal: 20,
          marginBottom: 40,
          borderColor: "white",

          height: 50,
          borderRadius: 40,
          //   backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="nandos"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: "center",
          },
          tabBarIcon: ({ focused }) => (
            <>{focused ? <Text className="text-white">Nandos</Text> : ""}</>
          ),
        }}
      />
    </Tabs>
  );
};

export default DetailsRoute;

const styles = StyleSheet.create({});
