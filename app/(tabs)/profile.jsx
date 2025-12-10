import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import InputText from "../components/InputText";
import LoadingIndicator from "../components/LoadingIndicator";
import TouchableBtn from "../components/TouchableBtn";

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // Navigate to home
      router.replace("/");
    }, 2000);
  };

  return (
    <View className="flex-1 bg-black w-full">
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <View className="w-[95%] flex-1 pl-4 items-center">
        <View className="flex justify-center items-center h-[50px] mt-[100px]">
          <Image
            source={images.person}
            className="h-[50px] w-[50px]"
          />
        </View>

        <View className="mt-6 flex justify-center items-center">
          <Text className="text-white">
            {isLogin ? "Create an Account" : "Login"}
          </Text>
        </View>

        {isLogin && (
          <View className="mt-6 flex justify-center w-[95%] items-center h-[50px]">
            <InputText
              bgColor="bg-primary"
              placeholder="Name"
              textColor="text-black"
            />
          </View>
        )}

        <View className="mt-6 flex justify-center w-[95%] items-center h-[50px]">
          <InputText
            bgColor="bg-primary"
            placeholder="Email"
            textColor="text-black"
          />
        </View>

        <View className="mt-6 flex justify-center w-[95%] items-center h-[50px]">
          <InputText
            bgColor="bg-primary"
            placeholder="Password"
            textColor="text-black"
            secureText={true}
          />
        </View>

        <View className="mt-10 flex-row gap-x-3">
          {isLogin ? (
            <>
              <Text
                className="text-white"
                onPress={() => setIsLogin(false)}
              >
                Already got an Account?
              </Text>
              <Text
                className="text-primary"
                onPress={() => setIsLogin(false)}
              >
                Login
              </Text>
            </>
          ) : (
            <>
              <Text
                className="text-white"
                onPress={() => setIsLogin(true)}
              >
                Don't have an Account?
              </Text>
              <Text
                className="text-primary"
                onPress={() => setIsLogin(true)}
              >
                Create
              </Text>
            </>
          )}
        </View>

        <View className="w-full justify-center items-center mt-4">
          <TouchableBtn
            btnText="Sign Up"
            onPress={handleSubmit}
          />
        </View>
      </View>

      {loading && <LoadingIndicator />}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
