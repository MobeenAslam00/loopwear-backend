import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

import userRoutes from './user/userRoutes.js';
import storeRoutes from './store/storeRoutes.js';
import productRoutes from './product/productRoutes.js';
import orderRoutes from './order/orderRoutes.js';
import statsRoutes from './stats/statsRoutes.js'; 
import reviewRoutes from './review/reviewRoutes.js';
dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/user', userRoutes);
app.use('/store', storeRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/stats', statsRoutes);
app.use('/reviews', reviewRoutes)

const PORT = process.env.PORT || 3041;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});