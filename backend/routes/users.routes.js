const { Router } = require("express");
const {
  updateUser,
  getCompanies,
  easyToApply,
} = require("../controllers/users.controller");
const {
  applyOffer,
  getApplicants,
} = require("../controllers/offers.controller");
const {
  toggleFollow,
  getOffers,
  isFollowing,
} = require("../controllers/follows.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const companyMiddleware = require("../middlewares/company.middleware");
const router = Router();

router.put("/:id", authMiddleware, updateUser);

router.get("/companies", authMiddleware, getCompanies);

router.get("/notification", authMiddleware, getOffers);

router.post("/apply/:id", authMiddleware, applyOffer);

router.post("/easy-apply", authMiddleware, easyToApply);

router.post("/follow", authMiddleware, toggleFollow);

router.post("/is-following", authMiddleware, isFollowing);

router.get("/applicants/:id", authMiddleware, companyMiddleware, getApplicants);
module.exports = router;
