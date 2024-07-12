import { Schema, model } from "mongoose";

const DOCUMENT_NAME = 'Category';
const COLLECTION_NAME = 'Categories';

const CategoriesSchema = new Schema({
    name: String
}, {
    collection: COLLECTION_NAME
});

export const CategoriesModel = new model(DOCUMENT_NAME, CategoriesSchema);