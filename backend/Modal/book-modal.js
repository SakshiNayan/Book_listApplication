const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{type: String},
    ISBN :{type: String , unique: true},
    author :{type: String},
    publisher :{type : String},
    Pub_date :{type : String},
    description :{type: String},
 

});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;