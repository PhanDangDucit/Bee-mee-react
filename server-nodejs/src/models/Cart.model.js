


import { schema, model } from "mongoose";

const DOCUMENT_NAME = 'OrderItem';
const COLLECTION_NAME = 'OrderItems';

const CartItemSchema = new schema({
    _id: false,
    id: {type: Number, required: true},
    users: {
        /**
         * userId to know that user added this cart item. (who is owner?)
         */
        userId: {type: Number, required: true, ref: 'users'},
    },
    product: {
        id: {type: Number, required: true, ref: 'products'},
        name: { type: Number, required: true},
        imageUrl: { type: Number, required: true},
        brandName: { type: String, required: true},
        price: {
            current:{
                value: { type: Number, required: true},
                text: { type: String, required: true},
            },
        },
    },
    quantity: {type: Number, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamp: true
});

export const ProductModel = new mongoose.model(DOCUMENT_NAME, CartItemSchema);