import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "chatclient.html"));
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    });
    socket.on("disconnect", (reason) => {
        console.log("User disconnected:", socket.id, reason);
    });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});