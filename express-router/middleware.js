import express from "express";

const app = express();

const mylogger = (req, res, next) => {
    console.log('Before logging')
    console.log('After logging')
    next()
}

app.get('/home', (req, res)=>{
    res.send()
    console.log('Welcome to terminal through /home URL')
})

app.get('/about', mylogger, (req, res)=>{
    res.send()
    console.log('Welcome to terminal through /about URL')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})