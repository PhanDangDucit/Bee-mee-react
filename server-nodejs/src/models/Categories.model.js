import mongoose from "mongoose";

const schema = mongoose.schema;

const CategoriesSchema = new schema({
    _id: false,
    id: Number,
    name: String
});

export const ProductModel = new mongoose.model("categories", CategoriesSchema);