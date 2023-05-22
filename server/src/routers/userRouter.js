const express = require("express");
const { getUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get('/', getUser);

// userRouter.get("/profile", (req, res) => {
//   res.status(200).send({
//     message: "user profile were returned",
//   });
// });

module.exports = userRouter;
