const db = require("../../models")

const Op = db.Sequelize.Op

exports.create = (req, res) => {
  res.status(200).json(req.body)
}
