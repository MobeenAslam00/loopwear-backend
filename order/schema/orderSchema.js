import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Complete'], default: 'Complete' },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        storeId: { type: String, required: true },
      },
    ], 
    rewardsUsage : {type : Boolean , required : false},
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }, 
);

export const Order = mongoose.model('Order', orderSchema);