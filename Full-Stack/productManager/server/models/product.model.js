const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minLength: [3, "Title must be at least 3 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [1, "Price must be at least $1.00."]
    },
    description: {
        type: String,
        required: [true, "A description is required."],
        minLength: [5, "The description must be at least 5 characters long."]
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);