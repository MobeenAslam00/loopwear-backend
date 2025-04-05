import { User } from '../user/schema/userSchema.js';
import { Store } from '../store/schema/storeSchema.js';
import { Order } from '../order/schema/orderSchema.js';

export const getCounts = async () => {
  const totalUsers = await User.countDocuments();
  const totalStores = await Store.countDocuments(); 
  const suspendedStores = await Store.countDocuments({ suspend: true });
  const completedOrders = await Order.countDocuments({ status: 'Complete' });

  return {
    totalUsers,
    totalStores,
    suspendedStores,
    completedOrders,
  };
}; 

export const storeGraph = async () => {
  try {
    const completedOrders = await Order.find({ status: 'Complete' }).select('createdAt');

    const ordersWithMonth = completedOrders.map((order, index) => ({
      [`order${index + 1}`]: order.createdAt.toLocaleString('default', { month: 'long' })
    }));

    return ordersWithMonth;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const getAllUsers = async (page = 1, limit = 10, search = '') => {
  const filter = search ? { email: { $regex: search, $options: 'i' } } : {};

  const totalUsers = await User.countDocuments(filter);
  const totalPages = Math.ceil(totalUsers / limit);

  const users = await User.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  return {
    users,
    page,
    limit,
    totalPages,
    totalUsers,
  };
};

export const getAllStores = async (page = 1, limit = 10, search = '') => {
  const filter = search ? { storeName: { $regex: search, $options: 'i' } } : {};

  const totalStores = await Store.countDocuments(filter);
  const totalPages = Math.ceil(totalStores / limit);

  const stores = await Store.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  return {
    stores,
    page,
    limit,
    totalPages,
    totalStores,
  };
};

export const toggleSuspendStatus = async (storeId, status) => {
  const store = await Store.findOneAndUpdate({ _id: storeId }, { suspend: status }, { new: true });
  if (!store) {
    throw new Error('Store not found');
  }

  return { message: 'Store suspend status updated', suspend: status };
};