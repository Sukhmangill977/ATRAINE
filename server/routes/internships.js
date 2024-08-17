const express = require("express");
const router = express.Router();
const multer = require("multer");
const Internship = require("../models/Internship");

// Set up multer for file uploads with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Handle form submission
router.post("/apply", upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'paymentScreenshot', maxCount: 1 }]), async (req, res) => {
  try {
    const formData = req.body;
    let resume = null;
    let paymentScreenshot = null;

    // Convert files to base64 if they exist
    if (req.files['resume']) {
      resume = req.files['resume'][0].buffer.toString('base64');
    }
    if (req.files['paymentScreenshot']) {
      paymentScreenshot = req.files['paymentScreenshot'][0].buffer.toString('base64');
    }

    const newInternship = new Internship({
      ...formData,
      resume,
      paymentScreenshot // Include the paymentScreenshot in the newInternship object
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
