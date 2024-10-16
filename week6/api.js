// Filename : api.js

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentschema');

// Connecting to database
const query = 'mongodb+srv://vvthangdev:EsUTJ634CYcTyV9u@cluster0.3wll8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    }
});

module.exports = router;

router.post('/save', function (req, res) {
    const newStudent = new StudentModel();
    newStudent.StudentId = req.body.StudentId;
    newStudent.Name = req.body.Name;
    newStudent.Roll = req.body.Roll;
    newStudent.Birthday = req.body.Birthday;

    newStudent.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/findall', function (req, res) {
    StudentModel.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.get('/findfirst', function (req, res) {
    StudentModel.findOne({ StudentId: { $gt: 185 } },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

router.get('/delete', function (req, res) {
    StudentModel.remove({ StudentId: 188 },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

router.post('/update', function (req, res) {
    StudentModel.findByIdAndUpdate(req.body.id,
        { Name: req.body.Name }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});