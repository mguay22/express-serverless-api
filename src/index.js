require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { checkToken } = require("./middleware/auth");

const { routes: userRoutes } = require("./user/routes");
const { routes: loginRoutes } = require("./login/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/login", loginRoutes);
app.use(checkToken);
app.use("/user", userRoutes);

module.exports = app;
