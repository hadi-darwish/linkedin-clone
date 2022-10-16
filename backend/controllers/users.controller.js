const User = require("../models/user.model");

const updateUser = async (req, res) => {
  const { name, email, password, type, age, profilePicture } = req.body;

  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password,
      type,
      age,
      profilePicture,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = { updateUser };
