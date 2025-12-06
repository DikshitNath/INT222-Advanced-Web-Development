import express from "express";
import mongoose from "mongoose";

import path from "path";
import { fileURLToPath } from "url";

import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

mongoose.connect("mongodb://localhost:27017/crud");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model("products", productSchema);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'crudFront.html'));
})

app.post('/save', async (req, res) => {
    await Product.insertOne({
        name: req.body.name,
        price: req.body.price
    });
    res.redirect('/fetch');
});

app.post('/update', async (req, res) => {
    await Product.updateOne(
        {_id: req.body.id}, {$set: {name: req.body.name, price: req.body.price}}
    );
    res.redirect('/fetch');
});

app.post('/delete', async (req, res) => {
    await Product.deleteOne({_id: req.body.id});
    res.redirect('/fetch');
});

app.get('/fetch', async (req, res) => {
    let data = await Product.find();
    res.send(data);
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});