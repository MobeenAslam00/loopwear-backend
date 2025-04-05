import {
    createStore,
    getAllStores,
    deleteStore, 
    suspendStore,
  } from './storeService.js'; 
  
  export const createStoreHandler = async (req, res) => {
    try {
      const store = await createStore(req.body);
      res.status(201).json(store);
    } catch (error) {
      res.status(400).json({ message: error.message });
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
  export const suspendStoreHandler = async (req , res) => { 
    try {   
      const { id , status } = req.query;  
     const suspend  = await suspendStore(id , status) 
     res.status(200).json({message : "Store Status Updated Successfully" , store : suspend});
    } 
    catch(e){ 
      res.status(500).json({ message: e.message });

    }
  }
  export const deleteStoreHandler = async (req, res) => {
    try {
      const deletedStore = await deleteStore(req.params.id);
      if (!deletedStore) {
        return res.status(404).json({ message: 'Store not found' });
      }
      res.status(200).json({ message: 'Store deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };