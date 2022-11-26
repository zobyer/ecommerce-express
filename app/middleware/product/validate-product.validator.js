// internal imports
const db = require("../../models");

// creating validator for user
const validateProduct = async (req, res, next) => {
    try {
        const productId = req.body.productId ? req.body.productId : req.query.productId ? req.query.productId : "";
        console.log("---> ", productId)
        if (productId) {
            const product = await db.products.findByPk(productId);
            if (!product) {
                return res.status(404).json({status: false, message: "Product not found"});
            }
        }
        next();
    } catch (error) {
        if (error.path === "id") {
            res.status(500).json({status: false, message: "Invalid product id"});
        }
        next(error.message);
    }
};

module.exports = validateProduct;