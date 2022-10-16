const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true,
  },
  password: {
    type: String,
    required: "Password is required",
    select: false,
  },
  type: {
    type: String,
    required: "Type is required",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  profilePicture: {
    type: String,
    default:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
  },
  age: {
    type: Number,
  },

  offers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Offer",
    },
  ],

  easyToApply: {
    yearsOfExperience: {
      type: Number,
    },
    isEducated: {
      type: Boolean,
    },
    resume: {
      type: String,
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
