const { Router } = require("express");
const { updateUser, getCompanies } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.put("/:id", authMiddleware, updateUser);

router.get("/companies", authMiddleware, getCompanies);
module.exports = router;
