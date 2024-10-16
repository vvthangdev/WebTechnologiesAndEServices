require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentschema');

// Connecting to database
const db = process.env.MONGO_URL

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch((error) => {
    console.error("MongoDB connection error: ", error);
});

router.post('/save', async (req, res) => {
    try {
        const newStudent = new StudentModel({
            StudentId: req.body.StudentId,
            Name: req.body.Name,
            Roll: req.body.Roll,
            Birthday: req.body.Birthday
        });

        const savedStudent = await newStudent.save(); // Use async/await instead of callback
        res.send("Data inserted");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving data");
    }
});

router.get('/findall', async (req, res) => {
    try {
        const students = await StudentModel.find(); // Use async/await
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error finding data");
    }
});

router.post('/delete', async (req, res) => {
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete(req.body.id); // Use async/await
        if (deletedStudent) {
            res.json(deletedStudent);
            console.log("Data Deleted!");
        } else {
            res.status(404).send("Student not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting data");
    }
});

router.post('/update', async (req, res) => {
    try {
        const updatedStudent = await StudentModel.findByIdAndUpdate(req.body.id, { Name: req.body.Name }, { new: true }); // Use async/await
        if (updatedStudent) {
            res.json(updatedStudent);
            console.log("Data updated!");
        } else {
            res.status(404).send("Student not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating data");
    }
});

module.exports = router;
