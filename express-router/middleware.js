// import express from "express";

// const app = express();

// const mylogger = (req, res, next) => {
//     next()
//     console.log('Before logging')
//     console.log('After logging')
// }

// const signIn = (req, res, next) => {
//     console.log('Signing in')
//     next()
// }

// app.get('/home', mylogger, (req, res)=>{
//     res.send()
//     console.log('Welcome to terminal through /home URL')
// })

// app.get('/about', mylogger, signIn, (req, res)=>{
//     res.send()
//     console.log('Welcome to terminal through /about URL')
// })

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

import express from "express";

const app = express();

const mylogger = (req, res, ) => {
    console.log("LOGGED")
}

app.get('/home',  (req, res, next)=>{
    res.send()
    console.log('Welcome 1')
    next()
    console.log('Welcome 2')
})

app.use(mylogger)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})