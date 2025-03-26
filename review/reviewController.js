import { addReviewToProduct, fetchAllReviews, fetchReviewsByProductId, deleteReview } from "./reviewService.js";

export const addReview = async (req, res) => {
  try {
    const reviewResponse = await addReviewToProduct(req.body);
    res.status(201).json(reviewResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await fetchAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewsByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await fetchReviewsByProductId(productId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const deleteResponse = await deleteReview(reviewId);
    res.status(200).json(deleteResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
