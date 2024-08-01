const express = require("express");
const router = express.Router();
const multer = require("multer");
const Internship = require("../models/Internship");

// Set up multer for file uploads with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Handle form submission
router.post("/apply", upload.single('resume'), async (req, res) => {
  try {
    const formData = req.body;
    let resume = null;
    if (req.file) {
      resume = req.file.buffer.toString('base64');
    }

    const newInternship = new Internship({
      ...formData,
      resume
    });

    await newInternship.save();
    res.status(200).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Fetch all internship applications
router.get("/applications", async (req, res) => {
  try {
    const applications = await Internship.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
