const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  description: {
    type: String,
    required: "Description is required",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
