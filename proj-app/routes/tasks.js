const mongoose = require('mongoose');
const Task = require('../models/tasks');

module.exports = {
    getTasks: function (req, res) {
        Task.find({}).exec(function(err, task) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.json(task);
            }
        });
    },
    createTask: function (req, res) {
        let newTaskDetails = req.body;
        newTaskDetails._id = new mongoose.Types.ObjectId();
        let task = new Task(newTaskDetails);
        task.save(function (err) {
            res.json(task);
        });
    },
    getTask: function (req, res) {
        let taskID = new mongoose.Types.ObjectId(req.params.id);
        Task.findOne({ _id: taskID })
            .exec(function (err, task) {
                if (err) return res.status(400).json(err);
                if (!task) return res.status(404).json();
                res.json(task);
            });
    },
    updateTask: function (req, res) {
        let taskID = new mongoose.Types.ObjectId(req.params.id);
        Task.findOneAndUpdate({ _id: taskID }, req.body, function (err, task) {
            if (err) return res.status(400).json(err);
            if (!task) return res.status(404).json();
            res.json(task);
        });
    },
    deleteTask: function (req, res) {
        let taskID = new mongoose.Types.ObjectId(req.params.id);
        Task.findOneAndDelete({ _id: taskID}, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
}