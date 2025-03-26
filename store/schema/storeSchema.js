import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    storeName: { type: String, required: true },
    storeDescription: { type: String, required: true },
    storeAddress: { type: String, required: false },
    ownerName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    accountDetails: { type: String, required: true },
    storeLogo: { type: String, required: false },
    suspend: { type: Boolean, default: false },
  },
  { timestamps: true }, 
);

export const Store = mongoose.model('Store', storeSchema);