const {handleDbErrorResponse} = require("../../utils");
const db = require("../../models");

const getProducts = async (req, res, next) => {
    try {
        const {productId} = req.query;
        let result;
        if (productId) {
            result = await db.products.findByPk(productId);
        } else {
            result = await db.products.findAll();
        }
        if ((!Array.isArray(result) && result !== null) || (Array.isArray(result) && result.length > 0)) {
            res.status(200).json({
                result
            });
        } else {
            res.status(404).json({
                status: false,
                message: "No products found"
            });
        }
    } catch (error) {
        const errors = await handleDbErrorResponse(error);
        res.status(422).json({status: false, errors});
    }
}

module.exports = getProducts;