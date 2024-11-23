import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';

const PatientSummary = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNavigation = () => {

  }

  

  const summary = `Haseen Mathar, a 20-year-old male, was diagnosed with HIV in early 2023 after experiencing symptoms such as prolonged fatigue, fever, and unexplained weight loss. Upon further testing, it was confirmed that he had progressed to AIDS, as indicated by a low CD4+ count and a high viral load. Haseen began antiretroviral therapy (ART) immediately following his diagnosis, which has been effective in reducing his viral load. He regularly undergoes lab tests to monitor his condition, including CD4+ count and viral load levels. Despite some challenges with opportunistic infections, such as pneumonia and oral thrush, Haseen has managed to stay relatively stable with his treatment plan. He has also received psychological support to cope with the emotional toll of living with HIV/AIDS, as well as nutritional counseling to maintain his overall health. His healthcare team continues to monitor his condition closely, aiming to prevent further progression of the disease and improve his quality of life.`;
  const truncatedSummary = summary.length > 150 ? `${summary.substring(0, 150)}...` : summary;

  return (
    <View className="bg-white flex justify-center gap-2 items-center rounded-[20px] w-[80vw] p-4">
      <Text className="font-bold text-[14px]">
        Patient Summary
      </Text>
      <Text onPress={() => setIsModalVisible(true)} className="text-black">
        {truncatedSummary}
      </Text>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-4/5 p-6 bg-white rounded-lg items-center">
            <Text className="font-bold">Summary</Text>
            <Text className="pt-4">{summary}</Text>
            <TouchableOpacity
              className="bg-blue-500 py-2 px-6 rounded-lg mt-4"
              onPress={() => setIsModalVisible(false)}
            >
              <Text className="text-white text-lg">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PatientSummary;
