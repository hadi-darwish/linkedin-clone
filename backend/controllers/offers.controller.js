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

const createOffer = async (req, res) => {
  const { title, description, company } = req.body;
  try {
    const offer = new Offer();
    offer.title = title;
    offer.description = description;
    offer.company = company;

    await offer.save();
    res.json(offer);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
