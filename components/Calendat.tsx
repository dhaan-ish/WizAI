import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as ImagePicker from 'react-native-image-picker';

const CalendarWithDots = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const markedDates = {
    '2024-11-18': {
      selected: true,
      marked: true,
      dotColor: 'blue',
      selectedColor: 'blue',
    },
    '2024-11-04': {
      selected: true,
      marked: true,
      dotColor: 'blue',
      selectedColor: 'blue',
    },
  };

  // Get today's date
  const today = new Date().toISOString().split('T')[0];
  markedDates[today] = {
    selected: true,
    marked: true,
    dotColor: 'red',
    selectedColor: 'red',
  };

  const handleDateClick = (date: string) => {
    if (date === today) {
      pickImage();
    } else if (markedDates[date]) {
      setSelectedDate(date);
      setIsModalVisible(true);
    }
  };

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'No image selected.');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Unknown error occurred.');
        } else if (response.assets && response.assets.length > 0) {
          setSelectedImage(response.assets[0].uri);
          Alert.alert('Image Selected', 'Photo has been selected successfully.');
        }
      }
    );
  };

  return (
    <View className="flex justify-center items-center p-4">
      <Calendar
        current={today}
        markedDates={markedDates}
        onDayPress={(day) => handleDateClick(day.dateString)}
        theme={{
          arrowColor: 'blue',
          todayTextColor: 'red',
          dayTextColor: 'black',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
        }}
      />
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-4/5 p-6 bg-white rounded-lg items-center">
            <Text className="text-xl font-bold mb-4">{selectedDate}</Text>
            <Text className="text-base mb-3 text-center">Blood Group - O+ve</Text>
            <Text className="text-base mb-3 text-center">Sugar - 100</Text>
            <Text className="text-base mb-6 text-center">BP - 120/80</Text>
            <TouchableOpacity
              className="bg-blue-500 py-2 px-6 rounded-lg"
              onPress={() => setIsModalVisible(false)}
            >
              <Text className="text-white text-lg">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Display selected image */}
      {selectedImage && (
        <View className="mt-4">
          <Text className="text-lg font-bold">Selected Image:</Text>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200, borderRadius: 10, marginTop: 10 }}
          />
        </View>
      )}
    </View>
  );
};

export default CalendarWithDots;
