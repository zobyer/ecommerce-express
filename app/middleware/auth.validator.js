const jwt = require("jsonwebtoken");

const validateAuthenticateRequest = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token == undefined)
      return res.status(422).json({
        status: false,
        message: "Invalid token",
      });

    let user = {};
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
      if (err != null)
        return res.status(422).json({
          status: false,
          message: "Invalid token",
        });

      req.body.user = decoded;
    });

    next();
  } catch (error) {
    return res.status(422).json({
      status: false,
      message: "Invalid token",
    });
  }
};

module.exports = validateAuthenticateRequest;
