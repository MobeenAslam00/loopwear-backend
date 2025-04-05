import { Product } from './schema/productSchema.js';

export const addProduct = async (dto) => {
  try {
    const newProduct = new Product(dto);
    await newProduct.save();
    return { message: 'Product added successfully', product: newProduct };
  } catch (error) {
    throw new Error('Failed to add product: ' + error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Product not found');
    }
    return { message: 'Product deleted successfully' };
  } catch (error) {
    throw new Error('Failed to delete product: ' + error.message);
  }
};

export const getAllProductsByUserId = async (userId, page = 1, limit = 10, category, max = 200000) => {
  try {
    const skip = (page - 1) * limit;

    const filter = { userId, productPrice: { $lte: max } };

    if (category) {
      filter.category = category;
    }

    const totalRecords = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return {
      pageNumber: page,
      limit,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      products,
    };
  } catch (error) {
    throw new Error('Failed to fetch products by user ID: ' + error.message);
  }
};

export const getAllProducts = async (page = 1, limit = 10, categories = [], max = 200000, productListing) => {
  try {
    const skip = (page - 1) * limit;

    const filter = {
      productPrice: { $lte: max },
    };

    if (categories.length > 0) {
      filter.category = { $in: categories };
    }

    if (productListing) {
      filter.productListing = productListing;
    }

    const totalRecords = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return {
      pageNumber: page,
      limit,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      products,
    };
  } catch (error) {
    throw new Error('Failed to fetch all products: ' + error.message);
  }
};


export const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error('Failed to fetch product by ID: ' + error.message);
  }
};

export const updateProduct = async (id, dto) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, dto, { new: true });
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  } catch (error) {
    throw new Error('Failed to update product: ' + error.message);
  }
};