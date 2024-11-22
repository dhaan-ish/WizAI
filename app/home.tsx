import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Stack } from "expo-router";
import SeverityCircle from "@/components/SeverityCircle";

const home = () => {
    return(
        <View className="flex flex-col">
            <View className="h-[50vh] bg-black flex justify-center items-center">
                <View className="bg-white p-10 rounded-full">
                </View>
                <Text className="text-white font-medium text-[20px] font-poppins pt-2">Dr. Lorem Ispum</Text>
                <Text className="text-white font-regular text-[12px] font-poppins pt-2">General Surgeon</Text>
                <Text className="text-white font-bold text-[14px] font-poppins pt-2">Wizzer's Hospital</Text>
            </View>
            <View className="absolute ml-[15%] z-10 inset-x-0 top-1/2 transform -translate-y-1/2 pl-2 pr-2 flex justify-evenly items-center flex-row h-20 w-[70%] bg-white rounded-[20px] shadow-lg shadow-black-500/50">
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
            <View className="h-[50vh] bg-white flex justify-start gap-2 flex-col items-center pt-[15%]">
                <View className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2">
                    <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{ uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png' }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">
                            Patient 1
                        </Text>
                    </View>
                    <View className="flex justify-center items-center">
                        <SeverityCircle value={6} />
                    </View>
                </View>
                <View className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2">
                    <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{ uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png' }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">
                            Patient 1
                        </Text>
                    </View>
                    <View className="flex justify-center items-center">
                        <SeverityCircle value={75} />
                    </View>
                </View>
                <View className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2">
                    <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{ uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png' }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">
                            Patient 1
                        </Text>
                    </View>
                    <View className="flex justify-center items-center">
                        <SeverityCircle value={100} />
                    </View>
                </View>
                <View className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2">
                    <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{ uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png' }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">
                            Patient 1
                        </Text>
                    </View>
                    <View className="flex justify-center items-center">
                        <SeverityCircle value={55} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default home;