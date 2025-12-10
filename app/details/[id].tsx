import { images } from "@/constants/images";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BusinessDetails = () => {
  const { id, image } = useLocalSearchParams();

  return (
    <View className="bg-primary flex-1 w-full min-h-screen py-16 px-3 items-center">
      <ScrollView className="bg-black w-[95%] rounded-xl min-h-full">
        {/* Business Image */}
        <View className="w-full h-[220px] rounded-t-xl overflow-hidden">
          <Image
            source={images.kfc}
            className="w-full h-full"
          />
        </View>

        {/* Name & Rating */}
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-white text-2xl font-semibold">KFC</Text>

          <View className="flex-row items-center">
            <Text className="text-white text-xl mr-1">4.5</Text>
            <Image
              source={images.star}
              className="w-7 h-7"
            />
          </View>
        </View>

        {/* Description */}
        <View className="px-4">
          <Text className="text-gray-300 leading-6 text-[15px]">
            KFC is a globally known fast-food brand famous for its crispy fried
            chicken and quick service. Whether you’re craving a bucket meal,
            spicy burger, or snack box, KFC offers delicious comfort food made
            with its iconic secret recipe.
          </Text>
        </View>

        {/* Location */}
        <View className="px-4 mt-5 flex-row items-center">
          <Image
            source={images.location}
            className="w-6 h-6 mr-2"
          />
          <Text className="text-gray-300">123 Main Street, Durban</Text>
        </View>

        {/* Contact */}
        <View className="px-4 mt-3">
          <Text className="text-gray-300">Phone: 021 345 6789</Text>
          <Text className="text-gray-300">Email: info@kfc.com</Text>
        </View>

        {/* Business Hours */}
        <View className="px-4 mt-4">
          <Text className="text-white text-lg font-semibold">
            Opening Hours
          </Text>

          <View className="mt-2">
            <Text className="text-gray-300">Mon - Fri: 9:00 AM - 9:00 PM</Text>
            <Text className="text-gray-300">Sat: 10:00 AM - 10:00 PM</Text>
            <Text className="text-gray-300">Sun: 10:00 AM - 8:00 PM</Text>
          </View>
        </View>

        {/* Services */}
        <View className="px-4 mt-6">
          <Text className="text-white text-lg font-semibold">Services</Text>
          <View className="mt-2">
            <Text className="text-gray-300">• Takeaway</Text>
            <Text className="text-gray-300">• Delivery</Text>
            <Text className="text-gray-300">• Dine-in</Text>
          </View>
        </View>

        {/* Reviews Section */}
        <View className="px-4 mt-8">
          <Text className="text-white text-xl font-semibold">
            {" "}
            Recent reviews
          </Text>

          {/* Review Item */}
          <View className="mt-4 bg-gray-900 p-3 rounded-xl">
            <Text className="text-white font-semibold">John M.</Text>
            <Text className="text-gray-300 text-sm">★★★★★</Text>
            <Text className="text-gray-400 mt-1">
              Great service and fresh food every time!
            </Text>
          </View>

          <View className="mt-3 bg-gray-900 p-3 rounded-xl">
            <Text className="text-white font-semibold">Samantha K.</Text>
            <Text className="text-gray-300 text-sm">★★★★☆</Text>
            <Text className="text-gray-400 mt-1">
              Tasty but sometimes a bit of a wait during peak hours.
            </Text>
          </View>
        </View>

        {/* Add a Review */}
        <View className="px-4 mt-8 mb-10">
          <Text className="text-white text-xl font-semibold">Add a Review</Text>

          <TextInput
            placeholder="Your name"
            placeholderTextColor="#888"
            className="bg-gray-900 text-white px-4 py-3 rounded-xl mt-4"
          />

          <TextInput
            placeholder="Write your review..."
            placeholderTextColor="#888"
            multiline
            className="bg-gray-900 text-white px-4 py-3 rounded-xl mt-4 h-32"
          />

          <TouchableOpacity className="bg-primary mt-5 py-3 rounded-xl">
            <Text className="text-center text-black font-semibold">
              Submit Review
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BusinessDetails;
