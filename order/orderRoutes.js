import express from 'express';
import {
  createOrderHandler,
  deleteOrderHandler,
  changeOrderStatusHandler,
  getAllOrdersHandler,
  historyHandler, 
  getRewardsHandler,
} from './orderController.js';

const router = express.Router();

router.post('/create', createOrderHandler); 
router.delete('/:orderId/:storeId', deleteOrderHandler); 
router.patch('/status/:orderId', changeOrderStatusHandler); 
router.get('/all', getAllOrdersHandler); 
router.get('/history', historyHandler);  
router.get('/rewards/:id', getRewardsHandler) 

export default router;