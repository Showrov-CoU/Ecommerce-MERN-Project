const express = require("express");
const morgan = require("morgan"); //third-party middleware
const bodyParser = require("body-parser"); //third-party middleware
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP. Please try again later",
});

app.use(limiter);
app.use(morgan("dev"));
app.use(xssClean());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user',userRouter);

app.get("/test", (req, res) => {
  res.status(200).send({
    message:
      "Hello Showrov! Your API test is working fine for GET Request...!!!!",
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
