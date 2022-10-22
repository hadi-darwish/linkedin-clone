const { Router } = require("express");
const {
  createOffer,
  getAllOffers,
  getOffer,
  updateOffer,
  deleteOffer,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const companyMiddleware = require("../middlewares/company.middleware");
const router = Router();
router.post("/", authMiddleware, companyMiddleware, createOffer);
router.get("/", authMiddleware, getAllOffers);
router.get("/:id", authMiddleware, getOffer);
router.put("/:id", authMiddleware, companyMiddleware, updateOffer);
router.delete("/:id", authMiddleware, companyMiddleware, deleteOffer);
module.exports = router;
