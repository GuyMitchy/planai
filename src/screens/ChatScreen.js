
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import { sendMessage, receiveMessages } from '../utils/socketService';

const ChatScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        receiveMessages((newMessage) => {
            setMessages((prevMessages) => [...prevMessages, { text: newMessage }]);
        });
    }, []);

    const handleSend = () => {
        sendMessage(message);
        setMessages([...messages, { text: message }]);
        setMessage('');
    };

    return (
        <View>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Text>{item.text}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput placeholder='Type a message' value={message} onChangeText={setMessage} />
            <Button title='Send' onPress={handleSend} />
        </View>
    );
};

export default ChatScreen;
