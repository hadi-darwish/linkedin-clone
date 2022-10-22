const User = require("../models/user.model");
const Offer = require("../models/offer.model");

const toggleFollow = async (req, res) => {
  const { company_id } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user.following.includes(company_id)) {
      user.following.pull(company_id);
      await user.save();
      const company = await User.findById(company_id);
      company.followers.pull(req.user._id);
      await company.save();
      res.json(user);
    } else {
      user.following.push(company_id);
      await user.save();
      const company = await User.findById(company_id);
      company.followers.push(req.user._id);
      await company.save();
      res.json(user);
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const isFollowing = async (req, res) => {
  const { company_id } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user.following.includes(company_id)) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getOffers = async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate("following")
    .lean()
    .exec();
  const offers = await Offer.find({ company: { $in: user.following } })
    .populate("company")
    .lean()
    .exec();
  res.json(offers);
};

module.exports = { toggleFollow, getOffers, isFollowing };
