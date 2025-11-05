import express from "express";
import path from 'path'
const app = express();

import { fileURLToPath } from "url";
import { dirname } from "path";

import {body, validationResult} from "express-validator";

const __filename  = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'formval.html'))
})

app.post('/submit', [
    body('name').isLength({min:3}).withMessage(),
    body('email').isEmail().withMessage()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessage = errors.array().map(err => `<li>${errors.msg}</li>`).join('');
        return res.send(
            `<h3>Form Validation Failed</h3>
            <ul>${errorMessage}</ul>
            <a href="/">Try again</a>`
        )
    }
    res.send(`<h2>Success</h2><p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p>`)
})

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})