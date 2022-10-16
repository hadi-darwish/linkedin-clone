const Offer = require("../models/offer.model");
const User = require("../models/user.model");

const getAllOffers = async (req, res) => {
  const offers = await Offer.find().populate("company").lean().exec();
  res.json(offers);
};

const getOffer = async (req, res) => {
  const offer = await Offer.findById(req.params.id)
    .populate("company")
    .lean()
    .exec();
  res.json(offer);
};

const createOffer = async (req, res) => {
  const { title, description, company } = req.body;
  try {
    const offer = new Offer();
    offer.title = title;
    offer.description = description;
    offer.company = req.user._id;

    await offer.save();
    const user = await User.findById(req.user._id);
    user.offers.push(offer._id);
    await user.save();
    res.json(offer);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const updateOffer = async (req, res) => {
  const { title, description, company } = req.body;

  try {
    const offer = await Offer.findByIdAndUpdate(req.params.id, {
      title,
      description,
    });
    res.json(offer);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndDelete(req.params.id);
    res.json(offer);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const applyOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    offer.applicants.push(req.user._id);
    await offer.save();
    const user = await User.findById(req.user._id);
    user.applications.push(offer._id);
    await user.save();
    res.json(offer);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getApplicants = async (req, res) => {
  const offer = await Offer.findById(req.params.id)
    .populate("applicants")
    .lean()
    .exec();
  res.json(offer.applicants);
};

module.exports = {
  getAllOffers,
  getOffer,
  createOffer,
  updateOffer,
  deleteOffer,
  applyOffer,
  getApplicants,
};
