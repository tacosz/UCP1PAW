require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const app = express();
const todoRoutes = require("./routes/perpusdb.js");
const { todos } = require("./routes/perpus.js");
const db = require("./database/db"); // Import database connection
const port = process.env.PORT || 3000; // Use environment variable or default to 3000
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

app.use(express.json());
//atur EJS sebagai view engine
app.set("view engine", "ejs");


app.get("/perpus-view", (req, res) => {
  db.query("SELECT * FROM perpustakaan", (err, perpustakaan) => {
    if (err) return res.status(500).send("Internal Server Error");
    res.render("perpus-page", {
      layout  : "layouts/main-layout",
      perpustakaan: perpustakaan
    })
  });
});

app.use((req, res, next) => {
  res.status(404).render("404"); 
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});