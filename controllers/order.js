import { OrderModel } from "../models/order.js";

export const getOrderByID = async (req, res) => {
    try {
        const id = Number(req.params.id)
        console.log(id)
        const result = await OrderModel.find({ _id: id })
        return res.status(200).json({ result })
    }
    catch (error) {
        return res.status(400).json(error)
    }
}
