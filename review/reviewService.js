import { Product } from "../product/schema/productSchema.js";
import { Review } from "./schema/reviewSchema.js";

export const addReviewToProduct = async (reviewData) => {
  try {
    const productExists = await Product.findById(reviewData.productId);
    if (!productExists) {
      throw new Error("Product not found. Cannot add review.");
    }

    const newReview = new Review(reviewData);
    await newReview.save();

    return { message: "Review added successfully", review: newReview };
  } catch (error) {
    throw new Error("Failed to add review: " + error.message);
  }
};

export const fetchAllReviews = async () => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).limit(4);
    return reviews;
  } catch (error) {
    throw new Error("Failed to fetch reviews: " + error.message);
  }
};

export const fetchReviewsByProductId = async (productId) => {
  try {
    const productExists = await Product.findById(productId);
    if (!productExists) {
      throw new Error("Product not found.");
    }

    const reviews = await Review.find({ productId });
    return reviews;
  } catch (error) {
    throw new Error("Failed to fetch reviews: " + error.message);
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      throw new Error("Review not found.");
    }

    return { message: "Review deleted successfully" };
  } catch (error) {
    throw new Error("Failed to delete review: " + error.message);
  }
};
