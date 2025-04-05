import {
    addProduct,
    deleteProduct,
    getAllProductsByUserId,
    getAllProducts,
    getProductById,
    updateProduct,
  } from './productService.js';
  
  export const addProductHandler = async (req, res) => {
    try {
      const product = await addProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const deleteProductHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await deleteProduct(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getAllProductsByUserIdHandler = async (req, res) => {
    try {
      const { userId, page = 1, limit = 10, category, max = 200000 } = req.query;
      const products = await getAllProductsByUserId(userId, Number(page), Number(limit), category, Number(max));
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getAllProductsHandler = async (req, res) => {
    try {
      const { page = 1, limit = 10, category, max = 200000, productListing } = req.query;
       console.log(category)
      let categories = [];
      if (Array.isArray(category)) {
        categories = category;
      } else if (typeof category === 'string') {
        categories = category.split(',');
      }
  
      const products = await getAllProducts(
        Number(page),
        Number(limit),
        categories,
        Number(max),
        productListing
      );
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  export const getProductByIdHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await getProductById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const updateProductHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await updateProduct(id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };