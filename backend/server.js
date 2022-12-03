const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const routerBook = require('./Routes/bookList')
const userController = require("./Routes/user");

const app= express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use("/user", userController);
app.use("/books", routerBook);

app.listen(process.env.PORT || 3000,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3001")
    }
    else{
        console.log(err)
    }
});

mongoose.connect("mongodb://localhost/BookApplication",()=>{
    console.log("connected to db")
},(err)=>{
    console.log(err)
});

app.get("/", (req, res) => {
    res.send("Backend Working!");
});
