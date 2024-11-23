import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, Image, StyleSheet, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as ImagePicker from "expo-image-picker";

const CalendarWithDots = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [todayModal, setShowTodayModal] = useState(false);

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
      setShowTodayModal(true);
    } else if (markedDates[date]) {
      setSelectedDate(date);
      setIsModalVisible(true);
    }
  };

    const [file, setFile] = useState([]);
    useEffect(() => {
      console.log(file);

    }, [file]);
    const [error, setError] = useState(null);

    // Function to pick an image from 
    //the device's media library
    const pickImage = async () => {
        const { status } = await ImagePicker.
            requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {

            // If permission is denied, show an alert
            Alert.alert(
                "Permission Denied",
                `Sorry, we need camera 
                 roll permission to upload images.`
            );
        } else {

            // Launch the image library and get
            // the selected image
            const result =
                await ImagePicker.launchImageLibraryAsync();

            if (!result.cancelled) {

                // If an image is selected (not cancelled), 
                // update the file state variable\
                setFile((prev) => [...prev, result.assets[0].uri]);
                console.log(result.assets[0].uri);
                // console.log(typeof(result));

                // Clear any previous errors
                setError(null);
            }
        }
    };
    const [text, setText] = useState('');
    const handleSubmit = () => {
      alert(`Submitted Text: ${text}\nSelected Image: ${file.length}`);
      setShowTodayModal(false);
    };
  // Handle text change
  const handleTextChange = (input) => {
    setText(input);
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
      <Modal
        visible={todayModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowTodayModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 p-6 bg-white rounded-lg items-center">
            <Text style={styles.header}>
                Add Image:
            </Text>

            {/* Button to choose an image */}
            <TouchableOpacity style={styles.button}
                onPress={pickImage}>
                <Text style={styles.buttonText}>
                    Choose Image
                </Text>
            </TouchableOpacity>

            {/* Conditionally render the image 
            or error message */}
            {file ? (
                // Display the selected image
                <View style={styles.imageContainer} className='flex flex-row gap-2 bg-none shadow-none'>
                    {file.map((link, index) => (
                    <Image key={index} source={{ uri: link }} style={styles.image} />
                  ))}   
                </View>
            ) : (
                // Display an error message if there's 
                // an error or no image selected
                <Text style={styles.errorText}>{error}</Text>
            )}
            <TextInput
              className='border-2 border-gray-300 rounded-lg p-2 w-full'
              placeholder="Type something"
              value={text}
              onChangeText={handleTextChange}  // Update the text state as the user types
            />
            <TouchableOpacity style={styles.button}
                onPress={handleSubmit}
                className='mt-2'
                >
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
        </View>
      </Modal>

    
    </View>
  );
};

export default CalendarWithDots;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
  },
  header: {
      fontSize: 20,
      marginBottom: 16,
  },
  button: {
      backgroundColor: "#007AFF",
      padding: 10,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 5,
  },
  buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
  },
  imageContainer: {
      borderRadius: 8,
      marginBottom: 16,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 5,
  },
  image: {
      width: 40,
      height: 40,
      borderRadius: 8,
  },
  errorText: {
      color: "red",
      marginTop: 16,
  },
});
