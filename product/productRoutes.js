import express from 'express';
import {
  addProductHandler,
  deleteProductHandler,
  getAllProductsByUserIdHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
} from './productController.js';

const router = express.Router();

router.post('/add', addProductHandler); 
router.delete('/:id', deleteProductHandler); 
router.get('/getAllProductsByUserId', getAllProductsByUserIdHandler); 
router.get('/getAllProducts', getAllProductsHandler); 
router.get('/:id', getProductByIdHandler); 
router.put('/:id', updateProductHandler);

export default router;