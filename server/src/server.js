const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send({
    message:
      "Hello Showrov! Your API test is working fine for GET Request...!!!!",
  });
});
app.post("/test", (req, res) => {
  res.status(200).send({
    message:
      "Hello Showrov! Your API test is working fine for POST Request...!!!!",
  });
});
app.put("/test", (req, res) => {
  res.status(200).send({
    message:
      "Hello Showrov! Your API test is working fine for PUT Request...!!!!",
  });
});
app.delete("/test", (req, res) => {
  res.status(200).send({
    message:
      "Hello Showrov! Your API test is working fine for DELETE Request...!!!!",
  });
});

app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001`);
});
