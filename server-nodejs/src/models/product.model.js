
import mongoose from "mongoose";

const schema = mongoose.schema;

const ProductSchema = new schema({
    _id: false,
    id: Number,
    name: String,
    description: String,
    categoryId: Number,
    size: ["M", "L", "S"],
    productionDate: { type: Date, default: Date.now },,
    price: {
        current: {
            value: Number,
            text: String
        }
    },
    brandName: String,
    imageUrl: String,
    additionalImageUrls: Array
});

export const ProductModel = new mongoose.model("products", ProductSchema);
