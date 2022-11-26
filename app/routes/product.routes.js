// external imports
const express = require("express");
const router = express.Router();

// internal imports
const {createProduct, getProducts, updateProduct, deleteProduct} = require("../controllers/product");
const {validate, productValidations, validateProduct} = require("../middleware");


//=> SETTING UP THE ROUTER
router
    .post("/create", productValidations, validate, createProduct)
    .get("/get", validateProduct, getProducts)
    .put("/update", productValidations, validate, validateProduct, updateProduct)
    .delete("/delete", validateProduct, deleteProduct)

module.exports = router;