const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 characters long"]
    },
    preferredPosition: {
        type: String, 
        required: [true, "Position is required"],
        minLength: [2, "Position must be at least 2 characters long"]
    },
    gameOneStatus: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        default: "Undecided"
    },
    gameTwoStatus: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        default: "Undecided"
    },
    gameThreeStatus: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        default: "Undecided"
    }
}, { timestamps: true });

module.exports = mongoose.model("Player", PlayerSchema);