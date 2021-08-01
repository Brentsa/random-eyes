const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 280
    }, 
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;