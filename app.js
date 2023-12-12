require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require("cors");
const routes  = require("./routes/user");
const routesFood  = require("./routes/foods");
const routesBookmarks  = require("./routes/bookmarks");
const routesHistories  = require("./routes/history");
const app = express();
const { PORT } = process.env;

//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(routesFood);
app.use(routesBookmarks);
app.use(routesHistories);

// route utama
app.get("/", (req, res, next) => {
  return res.send("Welcome to CULINARYNDO!");
});

// Handling error 404
app.use((req, res, next) => {
  return res.status(404).json({
    status: false,
    message: "request not found",
    data: null,
  });
});

// Handling error 500
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: false,
    message: "internal server error" + err.message,
    data: null,
  });
});

app.listen(PORT, () => {
  return console.log(`running on http://localhost:${PORT}`);
});
