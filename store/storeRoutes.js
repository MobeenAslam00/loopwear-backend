import express from 'express';
import {
  createStoreHandler,
  getAllStoresHandler,
  deleteStoreHandler, 
  suspendStoreHandler,
} from './storeController.js';

const router = express.Router();

router.post('/create', createStoreHandler);
router.get('/all', getAllStoresHandler); 
router.put('/suspend', suspendStoreHandler);
router.delete('/:id', deleteStoreHandler);

export default router;