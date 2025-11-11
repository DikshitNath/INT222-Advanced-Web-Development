import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get('/set', (req, res) => {
    res.cookie('coursecode', 'INT222', {maxAge: 20000})
    res.send('Cookie is set')
})

app.get('/get', (req, res) => {
    console.log(req.cookies)
    res.send()
})

app.get('/clear', (req, res) => {
    res.clearCookie('coursecode')
    res.send('Cookie is cleared')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})