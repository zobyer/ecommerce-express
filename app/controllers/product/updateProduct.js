const {handleDbErrorResponse} = require("../../utils");
const db = require("../../models");

const updateProduct = async (req, res, next) => {
    const {productId, name, image, description, price} = req.body;
    try {
        const product = await db.products.update({
            name, description, image, price
        }, {
            where: {id: productId},
            returning: true,
            plain: true
        });
        res.status(200).json({
            product,
            message: "Product updated successfully"
        });
    } catch (error) {
        const errors = await handleDbErrorResponse(error);
        res.status(422).json({status: false, errors});
    }
}

module.exports = updateProduct;