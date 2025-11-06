import express from "express";
import { auth } from "./authmiddle.js";

const app = express();

app.get('/user', auth, (req, res) =>{
    res.send('Hello world')
    console.log('Hello World!')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})