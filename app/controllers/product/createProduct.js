const {handleDbErrorResponse} = require("../../utils");
const db = require("../../models");

const createProduct = async (req, res, next) => {
    const {name, image, description, price} = req.body;
    try {
        const product = await db.products.create({name, description, image, price});

        res.status(200).json({
            product,
            message: "Product created successfully"
        });
    } catch (error) {
        const errors = await handleDbErrorResponse(error);
        res.status(422).json({status: false, errors});
    }
}

module.exports = createProduct;