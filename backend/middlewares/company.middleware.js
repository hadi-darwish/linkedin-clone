const companyMiddleware = async (req, res, next) => {
  if (req.user.type !== "company") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = companyMiddleware;
