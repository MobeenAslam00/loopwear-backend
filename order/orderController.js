import {
    createOrder,
    deleteOrder,
    changeOrderStatus,
    getAllOrders, 
    getRewards,
    history,
  } from './orderService.js';
  
  export const createOrderHandler = async (req, res) => {
    try {
      const order = await createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const deleteOrderHandler = async (req, res) => {
    try {
      const { orderId, storeId } = req.params;
      const result = await deleteOrder(orderId, storeId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
   
  export const getRewardsHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await getRewards(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const changeOrderStatusHandler = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const result = await changeOrderStatus(orderId, status);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getAllOrdersHandler = async (req, res) => {
    try {
      const { page = 1, limit = 10, storeId } = req.query;
      const orders = await getAllOrders(Number(page), Number(limit), storeId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const historyHandler = async (req, res) => {
    try {
      const { page = 1, limit = 10, userId } = req.query;
      const orders = await history(Number(page), Number(limit), userId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };