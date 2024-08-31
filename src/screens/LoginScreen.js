
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '../utils/apiService';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login({ email, password });
            // Handle successful login
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <View>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
            {error ? <Text>{error}</Text> : null}
            <Button title='Login' onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
