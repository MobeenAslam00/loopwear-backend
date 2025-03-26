import {
    getCounts,
    getAllUsers,
    getAllStores,
    toggleSuspendStatus, 
    storeGraph,
  } from './statsService.js';
  
  export const getCountsHandler = async (req, res) => {
    try {
      const counts = await getCounts();
      res.status(200).json(counts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
   export const graph = async (req , res) => { 
    try { 
     const graphData = await storeGraph(); 
     res.status(200).json(graphData)
    }catch (e) { 
      res.status(500).json({ message: e.message });
    }
   }
  export const getAllUsersHandler = async (req, res) => {
    try {
      const { page = 1, limit = 10, search } = req.query;
      const users = await getAllUsers(Number(page), Number(limit), search);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getAllStoresHandler = async (req, res) => {
    try {
      const { page = 1, limit = 10, search } = req.query;
      const stores = await getAllStores(Number(page), Number(limit), search);
      res.status(200).json(stores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const toggleSuspendStatusHandler = async (req, res) => {
    try {
      const { id, status } = req.body;
      const result = await toggleSuspendStatus(id, status);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };