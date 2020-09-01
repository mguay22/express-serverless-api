const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id, iat: Date.now() }, process.env.JWT_SECRET);

module.exports = {
  signToken,
};
