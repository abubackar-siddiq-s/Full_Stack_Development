const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/DB_NAME")
.catch(err => console.log(err));

const schema = new mongoose.Schema({
    name: String,
    age: Number
});

const DB = mongoose.model("DB", schema);

async function run() {

    const create = await new DB.create({
        name: "John",
        age: 30
    }).save();

    const read = await DB.findOne({
        name: "John"
    });

    const update = await DB.updateOne(
        { name: "John" },
        { age: 31 }
    );

    const del = await DB.deleteOne({
        name: "John"
    });

}

run();

app.listen(3000, () => console.log("Server running on port 3000"));