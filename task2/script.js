import express from "express";
import { auth } from "./auth.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/submit', auth, (req, res) => {
    res.send('Welcome Admin')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
