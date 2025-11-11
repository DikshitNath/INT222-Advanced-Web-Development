import express from "express";
import cookieParser from "cookie-parser";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/set', (req, res) => {
    res.cookie('Course', req.body.course, { maxAge: 60000 })
    res.cookie('User', req.body.user, { maxAge: 60000 })
    res.send(
        `<h1>Cookies have been set for 1 minute. </h1>
        <h3>Course: ${req.body.course} </h3>
        <h3>User: ${req.body.user} </h3>
        <a href="/">Go Back</a>`
    )
})

app.get('/clear', (req, res) => {
    res.clearCookie('Course')
    res.clearCookie('User')
    res.send('Cookies are cleared')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})