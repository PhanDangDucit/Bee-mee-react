

import mongoose from "mongoose";

const { schema, model } = mongoose;

const DOCUMENT_NAME = 'OrderItem';
const COLLECTION_NAME = 'OrderItems';

const OrderItemSchema = new schema({
    _id: false,
    id: {type: Number, required: true},
    
    /**
     * link or reference to "products" table
     */
    products: { type: Number, ref: 'products' },
    orderId: { type: Number, ref: 'products' },
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
}, {
    collection: COLLECTION_NAME,
    timestamp: true
});

export const ProductModel = new model(DOCUMENT_NAME, OrderItemSchema);