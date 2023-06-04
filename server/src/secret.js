require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3002;
const mongoDbAtlasUrl =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/myEcommerceDB";

module.exports = { serverPort, mongoDbAtlasUrl };
