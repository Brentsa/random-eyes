const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    streetNumber: {
        type: Number,
        required: true
    },
    streetName: {
        type: String,
        required: true,
        trim: true, 
        minLength: 3
    },
    city: {
        type: String,
        required: true,
        trim: true, 
        minLength: 3
    },
    province: {
        type: String,
        required: true,
        trim: true, 
        minLength: 3
    },
    country: {
        type: String,
        required: true,
        trim: true, 
        minLength: 3
    },
    postalCode: {
        type: String,
        required: true,
        trim: true, 
        minLength: 5
    }
})

module.exports = addressSchema;