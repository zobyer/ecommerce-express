const { commonModel, commonOptions } = require("./common.model")

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    ...commonModel,
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING({ length: 11 }),
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  })

  return User
}
