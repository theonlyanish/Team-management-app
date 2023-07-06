const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        validate: {
            validator: function(roleName) {
                const role_options = ["Leader", "Programmer", "Client"];
                return role_options.includes(roleName);
            },
            message: "Invalid role option"
        },
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: String,
    contribution: Number
});

module.exports = mongoose.model("User", userSchema);