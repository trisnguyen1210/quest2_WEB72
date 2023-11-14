
import { ProductsModel } from '../models/products.js';


export const getAllProduct = async (req, res) => {
    try {
        const result = await ProductsModel.find()
        return res.status(200).json({ result })
    }
    catch (error) {
        return res.status(400).json(error)
    }
}

export const getProductLowQuantity = async (req, res) => {
    try {
        const lowQuantityProducts = await ProductsModel.find({ instock: { $lt: 100 } });
        return res.status(200).json({ result: lowQuantityProducts });
    } catch (error) {
        return res.status(400).json(error);
    }
};

