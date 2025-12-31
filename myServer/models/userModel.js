const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const myUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

//
// 🔐 Hash password before save
//
myUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//
// 🔑 Generate JWT (used by sendToken)
//
myUserSchema.methods.getJWTToken = function () {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};
