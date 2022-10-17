const User = require("../models/user.model");
const Offer = require("../models/offer.model");

const updateUser = async (req, res) => {
  const { name, email, password, type, age, profilePicture } = req.body;

  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password,
      type,
      age,
      profilePicture,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getCompanies = async (req, res) => {
  const companies = await User.find({ type: "company" }).lean();
  res.json(companies);
};

const easyToApply = async (req, res) => {
  const { yearsOfExperience, isEducated, resume } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.easyToApply.yearsOfExperience = yearsOfExperience;
    user.easyToApply.isEducated = isEducated;
    user.easyToApply.resume = resume;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = { updateUser, getCompanies, easyToApply };
