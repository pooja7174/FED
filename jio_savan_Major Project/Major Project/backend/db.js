const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://pooja:pooja%407820@cluster0.h0ddjdt.mongodb.net/jio_savan-clone";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err.message);
    });