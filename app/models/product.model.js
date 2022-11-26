const {commonModel} = require("./common.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define(
        "products",
        {
            ...commonModel,
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                trim: true,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
                defaultValue: null,
            },
            price: {
                type: Sequelize.INTEGER,
                default: 0
            },
            published: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            // zilla_id: {type: Sequelize.INTEGER,}
        },
        {
            timestamps: true,
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

    Product.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    };

    return Product;
};
