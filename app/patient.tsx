import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Stack } from "expo-router";
import { useRoute } from '@react-navigation/native';
import CalendarWithDots from "@/components/Calendat";
import PatientSummary from "@/components/PatientSummary";
const phoneNumber = "+91 9876543210";
const latitude = "13.095297792177373";
const longitude = "80.28600825704999";

const handlePhonePress = () => {
  Linking.openURL(`tel:${phoneNumber}`);
};

const handleLocationPress = () => {
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  Linking.openURL(url);
};

const patient = () => {
  const route = useRoute();
  const {name} = route.params;
  return (
    <View className="flex flex-col">
      <View className="h-[50vh] bg-black flex justify-between pt-20 pb-5 px-10 flex-col items-center">
        <View className="flex justify-between items-center flex-row gap-20">
          <View className="flex justify-center gap-3 items-start flex-col ">
            <Text className="text-white font-normal text-[20px]">
              {name}
            </Text>
            <Text className="text-white font-normal text-[14px]">O +ve</Text>
            <Text className="text-white font-normal text-[14px]">24 Years</Text>
            <TouchableOpacity onPress={handlePhonePress}>
              <Text className="text-white font-normal text-[14px]">
                {phoneNumber}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLocationPress}>
              <Text className="text-white font-normal text-[14px]">
                Location
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex justify-center items-start flex-col ">
            <Image
              source={{
                uri: "https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png",
              }}
              className="h-[100px] w-[100px]"
            />
          </View>
        </View>
        <View>
            <PatientSummary />
        </View>
      </View>

      <View className="h-[50vh] ml-[-10px] bg-white flex justify-center gap-2 flex-col items-center">
        <CalendarWithDots />
      </View>
    </View>
  );
};

export default patient;
