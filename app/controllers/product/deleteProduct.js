const {handleDbErrorResponse} = require("../../utils");
const db = require("../../models");

const deleteProduct = async (req, res, next) => {
    try {
        const {productId} = req.query;
        if (!productId) {
            res.status(404).json({status: false, message: "product id not provided"});
        }
        const product = await db.products.destroy({
            where: {id: productId},
        });
        res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        const errors = await handleDbErrorResponse(error);
        res.status(422).json({status: false, errors});
    }
}

module.exports = deleteProduct;