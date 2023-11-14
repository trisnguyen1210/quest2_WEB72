import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    _id: { type: Number },
    item: { type: String },
    price: { type: Number },
    quantity: { type: Number },
})

export const OrderModel = mongoose.model('order', OrderSchema, 'order', { autoCreate: false });