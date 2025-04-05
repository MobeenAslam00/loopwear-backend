import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  photos: { 
    type: [String], 
    validate: [(val) => val.length <= 3, "Exceeds the limit of 3 photos"] 
  },
  reviewNote: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true } 
});

export const Review = mongoose.model("Review", reviewSchema);
