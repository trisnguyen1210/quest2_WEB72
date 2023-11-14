import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    sku: { type: String },
    description: { type: String },
    instock: { type: Number },
})

export const ProductsModel = mongoose.model('inventory', ProductSchema, 'inventory', { autoCreate: false });