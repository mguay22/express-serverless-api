const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.stats(401).json({
        sucess: false,
        message: "Token is not valid",
      });
    }
    req.decoded = decoded;
    return next();
  });
};

module.exports = {
  checkToken,
};
