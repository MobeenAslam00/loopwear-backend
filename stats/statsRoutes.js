import express from 'express';

import {
  getCountsHandler,
  getAllUsersHandler,
  getAllStoresHandler,
  toggleSuspendStatusHandler, 
  graph,
} from './statsController.js';

const router = express.Router();

router.get('/counts', getCountsHandler);
router.get('/users', getAllUsersHandler);
router.get('/stores', getAllStoresHandler);
router.post('/suspend', toggleSuspendStatusHandler); 
router.get('/graphData', graph);

export default router;