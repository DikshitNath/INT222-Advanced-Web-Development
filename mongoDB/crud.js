import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/crud");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model("products", productSchema);

const saveInDB = async () => {
    let product = await Product.insertOne({
        name: "Book",
        price: 500
    });
    console.log(product);
};

const updateInDB = async () => {
    let data = await Product.updateOne(
        {_id: '6931159ccfd7348723fc6a81'}, {$set: {price: 100000}}
    );
    console.log(data);
};

const deleteInDB = async () => {
    let data = await Product.deleteOne({_id: '6931159ccfd7348723fc6a81'});
    console.log("Data deleted");
};

const findInDB = async () => {
    let data = await Product.find();
    console.log(data);
};

// saveInDB();
// updateInDB();
// deleteInDB();
// findInDB();


