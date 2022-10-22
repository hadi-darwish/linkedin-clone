const { Router } = require("express");
const {
  updateUser,
  getCompanies,
  easyToApply,
} = require("../controllers/users.controller");
const {
  applyOffer,
  getApplicants,
  haveApplied,
  getOffersByCompany,
} = require("../controllers/offers.controller");
const {
  toggleFollow,
  getOffers,
  isFollowing,
  getFollowers,
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

router.get("/followers", authMiddleware, companyMiddleware, getFollowers);

router.post("/have-applied", authMiddleware, haveApplied);

router.get("/applicants/:id", authMiddleware, companyMiddleware, getApplicants);

router.get("/company-offers", authMiddleware, companyMiddleware);
module.exports = router;
