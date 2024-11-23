import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, Image, StyleSheet, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import axios from 'axios';

const CalendarWithDots = ({markedDates}) => {
  console.log(markedDates);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [todayModal, setShowTodayModal] = useState(false);

  const sendData = async () => {
    let s = await getBase64(file);
    console.log(s.length + "-> length");
    try {
      // Send POST request with the array of texts to the Flask server
      const response = await axios.post('http://172.16.11.217:5000/receive_texts', {
        unique_id : 1,
        base64_image: s,
        doctor_summary : text,
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
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
    // let base64String = [];
    useEffect(() => {
      console.log(file.length);
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
    
    const getBase64 = async (filePaths) => {
      // const filePath = 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fexpo-nativewind-typescript-boilerplate-7563ba1f-38e2-43e4-95cd-c2cde682f18a/ImagePicker/01b4a2cd-304d-4ca9-9921-d6755b43e2f2.jpeg';
      let base64String = [];
      for (let filePath of filePaths){
        try {
          // Read the file as a Base64 string
          const base64Image = await FileSystem.readAsStringAsync(filePath, {
            encoding: FileSystem.EncodingType.Base64,
          });
          // console.log(base64Image);
          base64String.push(base64Image);
          // console.log(base64String.length);
          // setBase64String(base64Image); // Set the Base64 string in the state
          console.log(base64Image); // Log the Base64 string
        } catch (error) {
          console.error('Error converting file to base64:', error);
        }
      }
      console.log(base64String.length);
      return base64String;
      
    };

    const [text, setText] = useState('');
    const handleSubmit = () => {
      alert(`Submitted Text: ${text}\nSelected Image: ${file.length}`);
      setShowTodayModal(false);
      sendData();
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
            {/* <Text className="text-base mb-3 text-center">{markedDates[selectedDate].summary}</Text> */}
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
