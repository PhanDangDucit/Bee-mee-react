
import mongoose from "mongoose";

const schema = mongoose.schema;

const ProductSchema = new schema({
    _id: false,
    id: Number,
    name: String,
    description: String,
    categoryId: {type: Number, ref: 'categories'},
    size: {type: [String]}, // enum
    productionDate: { type: Date, default: Date.now },
    price: {
        current: {
            value: Number,
            text: String
        }
    },
    genre: {
        type: [String] // Array<String>
    },
    brandName: String,
    imageUrl: String,
    additionalImageUrls: {type: [String]}
});

export const ProductModel = new mongoose.model("products", ProductSchema);
