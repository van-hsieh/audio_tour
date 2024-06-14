const express = require("express");
const router = express.Router();
const path = require("path");

const Attraction = require("../models/attractionModel");

router.get("/", async (req, res) => {
  const rows = await Attraction.getAllAttractions();
  res.status(200).json(rows);
});

// Get attraction by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const attraction = await Attraction.getAttractionById(id);
  res.status(200).json(attraction);
});

// Get attraction audio file
router.get("/audio/:file_path", async (req, res) => {
  const { file_path } = req.params;
  const filePath = path.join(__dirname, "..", "..", "audio_files", file_path);
  res.sendFile(filePath);
});

// serch for attractions by name
router.get("/search/:name", async (req, res) => {
  const { name } = req.params;
  const rows = await Attraction.searchAttractionsByName(name);
  res.status(200).json(rows);
});

// catch all other routes
router.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
