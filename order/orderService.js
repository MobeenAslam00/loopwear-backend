import { Order } from './schema/orderSchema.js';
import { User } from '../user/schema/userSchema.js';
import { orderConfirmation } from '../mailer/sendMail.js';



export const createOrder = async (dto) => {
  try {
    console.log('dto', dto.products.length);
    const newOrder = new Order(dto);
    await newOrder.save();
    if (dto.rewardsUsage) { 
      await User.findByIdAndUpdate(dto.userId, { $set: { rewards: 0 } });
    } 
    else if (!dto.rewardsUsage) { 

    const rewardPoints = dto.products.length * 3; 

    await User.findByIdAndUpdate(dto.userId, { $inc: { rewards: rewardPoints } }); 
    const user = await User.findOne({_id:dto.userId})
    console.log(user.email,user.username,newOrder._id.toString())
    orderConfirmation(user.email,user.username,newOrder._id.toString())
    }

    return { message: 'Order created successfully', order: newOrder };
  } catch (error) {
    throw new Error('Failed to create order: ' + error.message);
  }
}; 
export const getRewards = async (userId) => {
  try {
    const user = await User.findById(userId).select('rewards');

    if (!user) {
      throw new Error('User not found');
    }

    return { rewards: user.rewards };
  } catch (error) {
    throw new Error('Failed to fetch rewards: ' + error.message);
  }
};
export const deleteOrder = async (orderId, storeId) => {
  try {
    const order = await Order.findOneAndDelete({ _id: orderId, 'products.storeId': storeId });
    if (!order) {
      throw new Error('Order not found or unauthorized');
    }
    return { message: 'Order deleted successfully' };
  } catch (error) {
    throw new Error('Failed to delete order: ' + error.message);
  }
};
export const changeOrderStatus = async (orderId, status) => {
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    order.status = status;
    await order.save();
    return { message: 'Order status updated successfully', order };
  } catch (error) {
    throw new Error('Failed to update order status: ' + error.message);
  }
};
export const getAllOrders = async (page = 1, limit = 10, storeId) => {
  try {
    const skip = (page - 1) * limit;
  console.log(storeId)
    let filter = {};
    if (storeId) {
      filter = { 'products.storeId': storeId }; 
    }

    const totalRecords = await Order.countDocuments(filter);
    const orders = await Order.find(filter).skip(skip).limit(limit);

    return {
      pageNumber: page,
      limit,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      orders,
    };
  } catch (error) {
    throw new Error('Failed to fetch orders: ' + error.message);
  }
};
export const history = async (page = 1, limit = 10, userId) => {
  try {
    const skip = (page - 1) * limit;

    let filter = {};
    if (userId) {
      filter = { userId: userId };
    }

    const totalRecords = await Order.countDocuments(filter);
    const orders = await Order.find(filter).skip(skip).limit(limit);

    return {
      pageNumber: page,
      limit,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      orders,
    };
  } catch (error) {
    throw new Error('Failed to fetch order history: ' + error.message);
  }
};