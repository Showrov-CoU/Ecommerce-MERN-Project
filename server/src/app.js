const express = require("express");
const morgan = require("morgan"); //third-party middleware
const bodyParser = require("body-parser"); //third-party middleware
const createError = require("http-errors");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.status(200).send({
    message:
      "Hello Showrov! Your API test is working fine for GET Request...!!!!",
  });
});

app.get("/api/user", (req, res) => {
  res.status(200).send({
    message: "user profile is returned",
  });
});

// Client Error Handling
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});
// server Error Handling- all the error comes here
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
