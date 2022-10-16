const { Router } = require("express");
const {
  createOffer,
  getAllOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();
router.post("/", authMiddleware, createOffer);
router.get("/", getAllOffers);
module.exports = router;
