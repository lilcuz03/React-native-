import { images } from "@/constants/images";
import { icons } from "@/constants/navIcons";
import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import BusinessCard from "../components/BusinessCard";
import IconsNav from "../components/IconsNav";
import InputText from "../components/InputText";
import PromoCard from "../components/PromoCard";
const Home = () => {
  const onTextChange = () => {};
  const [onFocus, setOnFocus] = useState(false);
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-5"
      >
        <StatusBar
          backgroundColor="yellow"
          barStyle="dark-content"
        />
        <View className="w-full items-center my-8">
          <Image
            source={images.logo}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <Text
            className="text-white text-[20px] font-semibold mt-4"
            style={{
              fontSize: 26,
              marginBottom: 4,
              fontWeight: "bold",
            }}
          >
            LAKKER
          </Text>
          <Text
            className="text-gray-400 text-sm"
            style={{
              fontSize: 12,
              color: "gray",
            }}
          >
            Discover • Rate • Connect
          </Text>
        </View>
        <View className="my-5 min-h-[30px]">
          <InputText
            bgColor="bg-black"
            placeholder="Search for a service or business..."
            value=""
            secureText={false}
            onchangeText={() => onTextChange}
          />
        </View>

        <View className="h-[100px] mb-5">
          <FlatList
            data={icons}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="  items-center justify-start"
                onPress={item.onPress}
              >
                {/* Icon container */}
                {/* <View className="bg-black rounded-full h-14 w-14 flex items-center justify-center">
                  <Image
                    source={item.icon}
                    className="w-8 h-8"
                  />
                </View> */}
                <IconsNav
                  icon={item.icon}
                  onPress={() =>
                    router.push(
                      `/${item.id}?name=${encodeURIComponent(item.name)}`
                    )
                  }
                />

                {/* Text below icon */}
                <Text
                  className="text-white  mt-2 text-sm"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View className="justify-center items-center">
          <Text
            className="text-[30px]"
            style={{ fontWeight: "700", color: "" }}
          >
            Trending Businesses
          </Text>
        </View>

        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={true}
            className="min-w-[100px] h-[200px]"
          >
            <View className="w-[200px] h-full mr-10">
              <BusinessCard
                image={images.starbucks}
                link="/details/starbucks"
                title="StarBucks"
                ranking={3}
              />
            </View>
            <View className="w-[200px] h-full mr-10">
              <BusinessCard
                link="../details/kfc"
                title="KFC"
                ranking={4}
                image={images.kfc}
              />
            </View>
            <View className="w-[200px] h-full mr-10">
              <BusinessCard
                title="Nandos"
                link="/details/nandos"
                ranking={5}
                image={images.nandos}
              />
            </View>
          </ScrollView>
        </>
        {/* <Image
          source={images.promo}
          className="w-full h-[70px] mb-5"
        /> */}
        <View className="px-3 flex-row  justify-between items-center">
          <Text
            className="text-[30px]"
            style={{ fontWeight: "700", color: "" }}
          >
            Promo🔥
          </Text>
          <TouchableOpacity onPress={() => router.push("/Promo")}>
            <Text
              className=" text"
              style={{
                fontSize: 12,
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-full justify-center items-center   p-3 rounded-md mb-10 ">
          <ScrollView horizontal>
            <PromoCard />
            <PromoCard />
            <PromoCard />
          </ScrollView>
        </View>
        <View className="flex-row justify-center items-center my-3">
          <Text className="text-white text-2xl my-5 font-semibold mb-4">
            Latest Reviews
          </Text>
        </View>

        <ScrollView
          horizontal
          className="mb-10"
        >
          <View
            className="bg-white rounded-xl p-4 mb-4  mr-5"
            style={{ width: 200 }}
          >
            <Text
              className="text-white font-semibold"
              style={{
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              Starbucks
            </Text>
            <Text className="text-gray-400 text-sm italic mt-1">
              “Great service and cozy space. Highly recommend!”
            </Text>
            <Text className="text-yellow-400 mt-2">★★★★☆</Text>
          </View>

          <View
            className="bg-white rounded-xl p-4 mb-4 mr-5"
            style={{ width: 200 }}
          >
            <Text
              className="text-white font-semibold"
              style={{
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              Nando’s
            </Text>
            <Text className="text-gray-400 text-sm italic mt-1">
              “Food was fresh and tasty — delivery was quick.”
            </Text>
            <Text className="text-yellow-400 mt-2">★★★★★</Text>
          </View>

          <View
            className="bg-white rounded-xl p-4 mb-4  mr-5"
            style={{ width: 200 }}
          >
            <Text
              className="text-white font-semibold"
              style={{
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              Starbucks
            </Text>
            <Text className="text-gray-400 text-sm italic mt-1">
              “Great service and cozy space. Highly recommend!”
            </Text>
            <Text className="text-yellow-400 mt-2">★★★★☆</Text>
          </View>

          <View
            className="bg-white rounded-xl p-4 mb-4 mr-5"
            style={{ width: 200 }}
          >
            <Text
              className="text-white font-semibold"
              style={{
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              Nando’s
            </Text>
            <Text className="text-gray-400 text-sm italic mt-1">
              “Food was fresh and tasty — delivery was quick.”
            </Text>
            <Text className="text-yellow-400 mt-2">★★★★★</Text>
          </View>
        </ScrollView>

        <View className="  text-gray-400 rounded-md  p-5 mb-10">
          <Text className="text-white text-[34px] font-semibold mb-2">
            About Lakker
          </Text>
          <Text className="text-white leading-6 text-sm">
            Lakker is a cross-platform business directory app designed to
            connect users with trusted local service providers. Find businesses,
            leave reviews, and track their monthly performance — all in one
            place. Built with React Native, Expo, and Supabase for a seamless
            experience across mobile and web.
          </Text>
        </View>

        {/* Footer Section */}
        <View className="mt-10 mb-16 items-center">
          <Text
            className="text-gray-400 text-xs"
            style={{
              fontSize: 12,
              color: "gray",
            }}
          >
            © 2025 Lakker Application — All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
