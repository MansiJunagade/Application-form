const express = require("express");
const Form = require("../models/FormModel");

const router = express.Router();

// Route to handle form submission (POST request)
router.post("/submit", async (req, res) => {
    try {
        const { name, email, mobile, dob, message } = req.body;

        const newForm = new Form({ name, email, mobile, dob, message });
        await newForm.save();

        res.status(201).json({ message: "Form submitted successfully", data: newForm });
    } catch (error) {
        res.status(500).json({ message: "Error submitting form", error: error.message });
    }
});

// Route to fetch all submitted forms (GET request)
router.get("/view", async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving data", error: error.message });
    }
});

module.exports = router;
