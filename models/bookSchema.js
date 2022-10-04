const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    name: { type: String, required: true },
    imageurl : {type:String, required : true},
    author:  {type:String, required : true},
    price: { type:Number, required: true },
    page : {type:String, required : true},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
}, { collection: "book" });
module.exports = bookSchema = mongoose.model("book", bookModel);