
import mongoose from "mongoose";

const {schema, model} = mongoose;

const DOCUMENT_NAME = 'Product';
const COLLECTION_NAME = 'Products';

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
}, {
    collection: COLLECTION_NAME
});

export const ProductModel = model(DOCUMENT_NAME, ProductSchema);
