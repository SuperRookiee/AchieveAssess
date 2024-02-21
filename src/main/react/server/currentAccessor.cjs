
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const URL = process.env.VITE_BASE_URL;
const NODE_URL = process.env.VITE_NODE_URL;

const io = require('socket.io')(server, {
    cors: {
        origins: [`${URL}`, `${NODE_URL}`],
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

const users = [];

io.on('connection', (socket) => {
    socket.on('join-user', (userData) => {
        users.push({
            id: socket.id,
            name: userData.name,
            round: userData.round,
            subject: userData.subject,
            gradeLevel: userData.gradeLevel,
            currentNumber: userData.currentNumber,
        });

        io.emit('update-user', users);
        console.log(`${userData.name}님이 실전시험${userData.round} ${userData.gradeLevel} ${userData.subject}시험 ${userData.currentNumber}페이지를 풀고 있습니다`);
    });

    socket.on('disconnect', () => {
        const userIndex = users.findIndex((user) => user.id === socket.id);
        if (userIndex !== -1) {
            const disconnectedUser = users.splice(userIndex, 1)[0];
            io.emit('update-user', users);
            console.log(`${disconnectedUser.name}님이 시험을 종료하였습니다`);
        }
    });
});

server.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
});