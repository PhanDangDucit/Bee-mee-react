

import mongoose from "mongoose";

const schema = mongoose.schema;

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
});

export const ProductModel = new mongoose.model("order_item", OrderItemSchema);