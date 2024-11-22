import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarWithDots = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
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
  const handleDateClick = (date: string) => {
    if (markedDates[date]) {
      setSelectedDate(date);
      setIsModalVisible(true);
    }
  };

  return (
    <View className="flex justify-center items-center p-4">
      <Calendar
        current={'2024-11-01'}
        markedDates={markedDates}
        onDayPress={(day) => handleDateClick(day.dateString)} // Handle date click
        theme={{
          arrowColor: 'blue',
          todayTextColor: 'blue',
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
            <Text className="text-base mb-3 text-center">
              Blood Group - O+ve
            </Text>
            <Text className="text-base mb-3 text-center">
              Sugar - 100
            </Text>
            <Text className="text-base mb-6 text-center">
              BP - 120/80
            </Text>
            <TouchableOpacity
              className="bg-blue-500 py-2 px-6 rounded-lg"
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

export default CalendarWithDots;
