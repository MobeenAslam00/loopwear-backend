import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin', 'User', 'Vendor'], 
      required : true,
    }, 
    rewards : { 
      type : Number, 
      required : false, 
      default: 0, 
    }
  },
  {
    timestamps: true, 
  },
);

export const User = mongoose.model('User', userSchema);