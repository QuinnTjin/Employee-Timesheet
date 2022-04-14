const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const shiftRoutes = require("./routes/shifts");


const app = express();

//This is the connection to database.
mongoose
  .connect(
    "mongodb+srv://tjin:ZzC7ljcKDpIkfXA6@cluster0.dxlf8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

//This piece of code parses the JSON files that come back from MongoDB.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//This piece of code connects the application to routing in the routes folder, depending on the name called back to the server.
app.use("/api/users", userRoutes);
app.use(shiftRoutes);

module.exports = app;
