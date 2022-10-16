const { Router } = require("express");
const { updateUser, getCompanies } = require("../controllers/users.controller");
const { applyOffer } = require("../controllers/offers.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.put("/:id", authMiddleware, updateUser);

router.get("/companies", authMiddleware, getCompanies);

router.post("/apply/:id", authMiddleware, applyOffer);
module.exports = router;
