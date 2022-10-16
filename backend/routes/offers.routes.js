const { Router } = require("express");
const {
  createOffer,
  getAllOffers,
  getOffer,
  updateOffer,
  deleteOffer,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();
router.post("/", authMiddleware, createOffer);
router.get("/", authMiddleware, getAllOffers);
router.get("/:id", authMiddleware, getOffer);
router.put("/:id", authMiddleware, updateOffer);
module.exports = router;
