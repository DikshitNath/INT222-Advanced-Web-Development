import express from "express";
import userRoute from "./userRoute.js";

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoute)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})