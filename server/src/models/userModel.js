const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultImagePath } = require("../secret");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      maxlength: [30, "The length of user name can be maximum 30 charecter"],
      minlength: [3, "The length of user name can be minimum 3 charecter"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter valid email",
      },
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minlength: [6, "The length of user password can be minimum 6 charecter"],
      set: function (v) {
        return bcrypt.hashSync(v, bcrypt.genSaltSync(10))
      },
    },
    image: {
      type: String,
      default: defaultImagePath,
    },
    address: {
      type: String,
      required: [true, "User address is require"],
    },
    phone: {
      type: String,
      required: [true, "User phone is require"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);
module.exports = User;
