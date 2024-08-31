
import { io } from 'socket.io-client';

const socket = io('http://your-socket-url.com');

export const sendMessage = (message) => {
    socket.emit('send_message', message);
};

export const receiveMessages = (callback) => {
    socket.on('receive_message', (message) => {
        callback(message);
    });
};
