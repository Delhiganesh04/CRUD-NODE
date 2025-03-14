const express = require('express')
const Product = require('../model/products')
const {getAllProduct,getAllProducts,createProduct,updateProduct,deleteProduct} = require("../controller/product.controller")
const  router = express.Router()

router.get('/',getAllProducts)
router.get('/:id',getAllProduct)
router.post('/',createProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router