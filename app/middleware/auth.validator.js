const validateAuthenticateRequest = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    next();
  } catch (error) {
    return res.status(422).json({
      status: false,
    });
  }
};

module.exports = validateAuthenticateRequest;
