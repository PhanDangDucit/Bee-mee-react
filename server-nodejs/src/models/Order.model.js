

import mongoose from "mongoose";

const { schema, model } = mongoose;

const DOCUMENT_NAME = 'Order';
const COLLECTION_NAME = 'Orders';

const OrderSchema = new schema({
    _id: false,
    id: { type: Number, required: true },
    userId: { type: Number, ref: 'users' },
    
    // userId: { type: Schema.Types.ObjectId, ref: 'users' },
    paymentMethod: {type: String, required: true},
    orderDate: {type: Date, default: Date.now()},
    orderStatus: String
}, {
    collection: COLLECTION_NAME,
    timestamp: true
});

export const ProductModel = new model(DOCUMENT_NAME, OrderSchema);