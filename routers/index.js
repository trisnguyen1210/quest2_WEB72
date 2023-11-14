import express from 'express';
import { getAllProduct, getProductLowQuantity } from '../controllers/product.js';
import { login } from '../controllers/users.js';
import { getOrderByID } from '../controllers/order.js';
const router = express.Router()

router.post('/login', login)
router.get('/product', getAllProduct)
router.get('/product-lowquantity', getProductLowQuantity)
router.get('/order/:id', getOrderByID)

export default router;