import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputText from "../components/InputText";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="flex-1 bg-primary justify-center items-center">
      <Text>Login</Text>
      <View className="w-[90%] my-5 gap-y-5">
        <InputText
          placeholder="Email"
          value={email}
          onchangeText={setEmail}
        />
        <InputText
          placeholder="Password"
          value={password}
          onchangeText={setPassword}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
