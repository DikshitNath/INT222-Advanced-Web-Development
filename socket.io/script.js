import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
const app = express();
const server = createServer(app);
const io = new Server(server);
import path from 'path'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let clients = 0;

io.on('connection', (socket) => {
    clients++;
    io.emit('broadcast', `${clients} clients are connected`);
    socket.on('disconnect', () => {
        clients--;
        io.emit('broadcast', `${clients} clients are connected`);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});