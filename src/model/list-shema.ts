import mongoose, { Schema, mongo } from "mongoose";
import { PostScheme } from "../interfaces/post-interface";
import { FoodFrutas, FoodVerduras, FoodsSchema } from "../interfaces/foods-interface";

const postSchema = new Schema<PostScheme>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);



//     FOODS SCHEMAS
const foodSchema = new Schema<FoodsSchema>(
  {
    category: {
      doce: {
        name: { type: String, required: true },
        image: [
          {
            name: { type: String, required: true },
            image: { type: String, required: true },
          },
        ],
        text: { type: String, required: true },
      },
    },
  },
  { timestamps: true }
);

const foodFrutasSchema = new Schema<FoodFrutas>(
  {
    category: {
      frutas: {
        name: { type: String, required: true },
        image: [
          {
            name: { type: String, required: true },
            image: { type: String, required: true },
          },
        ],
        text: { type: String, required: true },
      },
    },
  },
  { timestamps: true }
);

const verdurasSchema = new Schema<FoodVerduras>({
  category: {
    verduras: {
      name: { type: String, required: true },
      image: [
        {
          name: { type: String, required: true },
          image: { type: String, required: true },
        },
      ],
      text: { type: String, required: true },
    },
  },
}, { timestamps: true })



export const postModel = mongoose.model<PostScheme>("API", postSchema);
export const foodsModel = mongoose.model<FoodsSchema>("FOODS", foodSchema);
export const foodFrutas = mongoose.model<FoodFrutas>("FRUTAS", foodFrutasSchema)
export const foodVerduras = mongoose.model<FoodVerduras>("VERDURAS", verdurasSchema)
