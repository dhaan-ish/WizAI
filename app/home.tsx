import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { Stack } from "expo-router";
import SeverityCircle from "@/components/SeverityCircle";
import { useNavigation } from "expo-router";

const home = () => {
    const navigation = useNavigation();

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
            <View className="h-[50vh] bg-white flex justify-start gap-1 flex-col items-center pt-[15%]">
                <View className="">
                    <TouchableOpacity
                        className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2"
                        onPress={() => navigation.navigate('patient', {name : "Dhaanish Ahamed M"})} // Navigate to the "patient" screen
                    >
                        <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{
                            uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png',
                            }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">Dhaanish Ahamed M</Text>
                        </View>
                        <View className="flex justify-center items-center">
                        <SeverityCircle value={100} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="">
                    <TouchableOpacity
                        className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2"
                        onPress={() => navigation.navigate('patient', {name : "Haseen Mathar Y"})} // Navigate to the "patient" screen
                    >
                        <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{
                            uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png',
                            }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">Haseen Mathar Y</Text>
                        </View>
                        <View className="flex justify-center items-center">
                        <SeverityCircle value={55} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="">
                    <TouchableOpacity
                        className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2"
                        onPress={() => navigation.navigate('patient', {name : "Gokul Krishna R"})} // Navigate to the "patient" screen
                    >
                        <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{
                            uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png',
                            }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">Gokul Krishna R</Text>
                        </View>
                        <View className="flex justify-center items-center">
                        <SeverityCircle value={6} />
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View className="">
                    <TouchableOpacity
                        className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2"
                        onPress={() => navigation.navigate('patient', {name : "Adam H Dhayfa Umar"})} // Navigate to the "patient" screen
                    >
                        <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{
                            uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png',
                            }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">Adam H Dhayfa Umar</Text>
                        </View>
                        <View className="flex justify-center items-center">
                        <SeverityCircle value={60} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="">
                    <TouchableOpacity
                        className="w-[90vw] bg-white rounded-lg flex flex-row justify-between items-center shadow-lg shadow-black-500 py-3 px-2"
                        onPress={() => navigation.navigate('patient', {name : "Nafeela"})} // Navigate to the "patient" screen
                    >
                        <View className="flex justify-center flex-row gap-2 items-center">
                        <Image
                            source={{
                            uri: 'https://rjhiucwgtqbfccdwscfa.supabase.co/storage/v1/object/public/assets/user.png',
                            }}
                            className="h-[40px] w-[40px]"
                        />
                        <Text className="font-medium text-[16px]">Nafeela</Text>
                        </View>
                        <View className="flex justify-center items-center">
                        <SeverityCircle value={60} />
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

export default home;