const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    description:String,
    category:String,
    image:String,
    location:String,
    postedAt:String,
    price:String
});

const productModel = mongoose.model('product',productSchema);

module.exports = { productModel };

