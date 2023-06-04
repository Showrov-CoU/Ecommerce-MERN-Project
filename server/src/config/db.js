const mongoose = require("mongoose");
const { mongoDbAtlasUrl } = require("../secret");
const { options } = require("../app");
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongoDbAtlasUrl, options);
    console.log("Connection to DB is successfully established");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.log("Could not connect to DB: ", error.toString());
  }
};
module.exports = connectDB;
