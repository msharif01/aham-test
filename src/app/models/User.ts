import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);