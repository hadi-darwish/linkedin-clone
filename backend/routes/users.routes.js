const { Router } = require("express");
const { updateUser, getCompanies } = require("../controllers/users.controller");
const {
  applyOffer,
  getApplicants,
} = require("../controllers/offers.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const companyMiddleware = require("../middlewares/company.middleware");
const router = Router();

router.put("/:id", authMiddleware, updateUser);

router.get("/companies", authMiddleware, getCompanies);

router.post("/apply/:id", authMiddleware, applyOffer);

router.get("/applicants/:id", authMiddleware, companyMiddleware, getApplicants);
module.exports = router;
