const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
