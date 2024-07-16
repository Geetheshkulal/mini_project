import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView,TouchableOpacity,Image } from 'react-native';
import { generateContent } from '../services/geminiService';
import Colors from '../Utils/Colors';

const ChatBot = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    try {
      // Call the Gemini API to generate content based on inputText
      const response = await generateContent(inputText.trim());
      console.log('Gemini API response:', response);

      // Extract bot response from Gemini API
      const botResponse = response?.candidates[0]?.content?.parts[0]?.text;

      // Update chat history with user input and bot response
      setChatHistory(prevChat => [...prevChat, { user: inputText.trim(), bot: botResponse }]);

      // Clear input field
      setInputText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleClearHistory = () => {
    setChatHistory([]);
  };

  return (
    <View style={{ flex: 1 }}>

        <TouchableOpacity style={{ padding: 10, alignItems: 'flex-end' }} onPress={handleClearHistory}>
        <Text style={{ color: 'white',marginTop:40,padding:10,backgroundColor:'#04AA6D',borderRadius:5,fontWeight:'bold' }}>Clear history</Text>
      </TouchableOpacity>

        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/bot.png')} style={{width: '100%', height: 200,  resizeMode:"contain" }}></Image>
         </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end'}}>
        {chatHistory.map((message, index) => (
          <View key={index} style={{ padding: 10, backgroundColor: message.user ? '#e0e0e0' : '#c8e6c9', alignSelf: message.user ? 'flex-end' : 'flex-start', borderRadius: 10, margin: 5, maxWidth: '80%' }}>
            <Text>{message.user}</Text>
            <Text >{message.bot}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 }}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

export default ChatBot;
