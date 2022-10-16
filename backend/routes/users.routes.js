const { Router } = require("express");
const { updateUser } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.put("/:id", authMiddleware, updateUser);

module.exports = router;
