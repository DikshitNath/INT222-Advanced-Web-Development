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

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "message.html"));
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // When this socket sends a chat message
  socket.on("chatMessage", (msg) => {
    console.log(`Message from ${socket.id}:`, msg);

    // Broadcast to all connected clients (including sender)
    io.emit("chatMessage", {
      id: socket.id,
      text: msg,
      time: new Date().toISOString()
    });
  });

  socket.on("disconnect", (reason) => {
    console.log("User disconnected:", socket.id, reason);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
