const mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sprint: String,
    description: String,
    members: Array,
    url: String,
    status: {
        type: String,
        validate: {
            validator: function(statusName) {
                const status_options = ["To Do", "Doing", "Done"];
                return status_options.includes(statusName);
            },
            message: "Invalid status option"
        }
    },
    comments: Array,
    contribution: Number
}, {strict: true});

module.exports = mongoose.model("Task", taskSchema);