const Offer = require("../models/offer.model");

const getOffers = async (req, res) => {
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
