import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productName: { type: String, required: true },
    storeId: { type: String, required: true },
    productBrand: { type: String, required: true },
    productPrice: { type: Number, required: true },
    category: { type: String, enum: ['Bridal', 'Party Wear', 'Non-Bridal'], required: true },
    productSize: { type: String, required: true },
    productListing: { type: String, required: true },
    dateOfPurchase: { type: Date, required: false, default:"2025-03-29" },
    productDetails: { type: String, required: true },
    images: { type: [String], required: false }, 
  },
  { timestamps: true }, 
);

export const Product = mongoose.model('Product', productSchema);