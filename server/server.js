require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
const attractionRoutes = require("./routes/attractions");
app.use("/api/attractions", attractionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
