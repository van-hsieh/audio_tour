require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// logs all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
const attractionRoutes = require("./routes/attractions");
app.use("/images", express.static("public/images"));
app.use("/api/attractions", attractionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
