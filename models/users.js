import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
})

export const UsersModel = mongoose.model('users', UsersSchema, 'users', { autoCreate: false })