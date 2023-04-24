import mongoose, { Document, Schema } from "mongoose";
import { UserInterface } from "../interfaces/user-interface";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export const modelUser = mongoose.model<UserInterface>("test", userSchema);
