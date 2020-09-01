const express = require("express");
const { signToken } = require("../utils/sign-token");

const routes = express.Router({
  mergeParams: true,
});

routes.get("/", (req, res) => {
  console.log(signToken);
  res.status(200).json(signToken(req.body.userId));
});

module.exports = {
  routes,
};
