

const express = require('express');
const router = express.Router();

// Controladores de productos
const ProductController = require('../controllers/productController');

// Ruta para eliminar producto
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;
