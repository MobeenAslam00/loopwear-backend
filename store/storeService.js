import { Store } from './schema/storeSchema.js';

export const createStore = async (dto) => {
  const existingStore = await Store.findOne({ email: dto.email });
  if (existingStore) {
    throw new Error('Store with this account already exists');
  }

  const newStore = new Store(dto);
  await newStore.save();

  return { message: 'Store created successfully', store: newStore };
};

export const getAllStores = async (page = 1, limit = 10, search = '') => {
  const skip = (page - 1) * limit;

  let filter = {};
  if (search) {
    filter = { storeName: { $regex: search, $options: 'i' } };
  }

  const totalRecords = await Store.countDocuments(filter);
  const stores = await Store.find(filter).skip(skip).limit(limit);

  return {
    pageNumber: page,
    limit,
    totalRecords,
    totalPages: Math.ceil(totalRecords / limit),
    stores,
  };
};
export const suspendStore = async (id , status) => {
  const store = await Store.findById(id);
  
  if (!store) {
    throw new Error('Store not found');
  }
  store.suspend = status; 
  await store.save(); 

  return store; 
};

export const deleteStore = async (id) => {
  const store = await Store.findByIdAndDelete(id);
  if (!store) {
    throw new Error('Store not found');
  }

  return { message: 'Store deleted successfully' };
};

export const isStoreAvailable = async (userId) => {
  const store = await Store.findOne({ userId });
  if (!store) {
    return { success: false };
  }
  return { success: true, storeId: store._id };
};