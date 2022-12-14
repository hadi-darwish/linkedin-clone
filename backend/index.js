const express = require("express");
require("dotenv").config();
require("./config/db.config");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const usersRoutes = require("./routes/users.routes");
app.use("/users", usersRoutes);

const offersRoutes = require("./routes/offers.routes");
app.use("/offers", offersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
