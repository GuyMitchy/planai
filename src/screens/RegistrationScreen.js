
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { register } from '../utils/apiService';

const RegistrationScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const response = await register({ email, password });
            // Handle successful registration
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <View>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
            {error ? <Text>{error}</Text> : null}
            <Button title='Register' onPress={handleRegister} />
        </View>
    );
};

export default RegistrationScreen;
