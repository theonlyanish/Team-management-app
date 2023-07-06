const mongoose = require('mongoose');
const User = require('../models/users');

module.exports = {
    getUsers: function (req, res) {
        User.find({}).exec(function(err, user) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.json(user);
            }
        });
    },
    getUser: function (req, res) {
        let userID = new mongoose.Types.ObjectId(req.params.id);
        User.findOne({ _id: userID })
            .exec(function (err, user) {
                if (err) return res.status(400).json(err);
                if (!user) return res.status(404).json();
                res.json(user);
            });
    },
    createUser: function (req, res) {
        let newUserDetails = req.body;
        newUserDetails._id = new mongoose.Types.ObjectId();
        let user = new User(newUserDetails);
        user.save(function (err) {
            res.json(user);
        });
    },
    updateUser: function (req, res) {
        let userID = new mongoose.Types.ObjectId(req.params.id);
        User.findOneAndUpdate({ _id: userID }, req.body, function (err, user) {
            if (err) return res.status(400).json(err);
            if (!user) return res.status(404).json();
            res.json(user);
        });
    },
    deleteUser: function (req, res) {
        let userID = new mongoose.Types.ObjectId(req.params.id);
        User.findOneAndDelete({ _id: userID}, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
}