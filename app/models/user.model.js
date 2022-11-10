const { commonModel } = require("./common.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      ...commonModel,
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        // field: "user_password",
        type: Sequelize.STRING,
        allowNull: true,
      },

      phone: {
        type: Sequelize.STRING({ length: 11 }),
      },
      published: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, saltRounds);
          }
        },
      },
      instanceMethods: {
        validPassword: (password) => {
          return bcrypt.compare(password, this.password);
        },
      },
    }
  );

  return User;
};
