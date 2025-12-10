import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator
        size="large"
        color="#fff"
      />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
});
