import express from "express";
import { addReview, getAllReviews, getReviewsByProductId, removeReview } from "./reviewController.js";

const router = express.Router();

router.post("/add", addReview);

router.get("/all", getAllReviews);

router.get("/product/:productId", getReviewsByProductId);

router.delete("/:reviewId", removeReview);

export default router;
