import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

const index = () => {
    return(
        <View className="flex flex-col">
            <View className="h-[50vh] bg-black flex justify-center items-center">
                <View className="bg-white p-10 rounded-full">
                </View>
                <Text className="text-white font-medium text-[20px] font-poppins pt-2">Dr. Lorem Ispum</Text>
                <Text className="text-white font-regular text-[12px] font-poppins pt-2">General Surgeon</Text>
                <Text className="text-white font-bold text-[14px] font-poppins pt-2">Wizzer's Hospital</Text>
            </View>
            <View className="absolute ml-[30%] z-10 inset-x-0 top-1/2 transform -translate-y-1/2 pl-2 pr-2 flex justify-between items-center flex-row h-20 w-[50%] bg-white rounded-[20px] shadow-lg shadow-black-500/50">
                    <View className="flex justify-start items-start flex-col">
                        <Text className="font-medium text-[20px] ">
                            5.4
                        </Text>
                        <Text className="text-[#A39E9E] font-normal text-[14px]">
                            Relation Ship Scores
                        </Text>
                    </View>
                    <View className="w-2 h-[95%] bg-[#F5F5F5]">
                        <Text></Text>
                    </View>
                    <View className="flex justify-start items-start flex-col pr-5">
                        <Text className="font-medium text-[20px] ">
                            5.4
                        </Text>
                        <Text className="text-[#A39E9E] font-normal text-[14px]">
                            Patients
                        </Text>
                    </View>
            </View>
            <View className="h-[50vh] bg-white flex justify-center items-center">
                <Text className="text-black">Hello World</Text>
            </View>
        </View>
    )
}

export default index;

const styles = StyleSheet.create({});