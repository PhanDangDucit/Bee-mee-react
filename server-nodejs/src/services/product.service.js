import { Types } from "mongoose";
import { ProductModel } from "../models/Products.model";
import createError from "http-errors";

export class ProductService {
    /**
     * 
     */
    async addProduct(data) {
        await ProductModel.create(data);
    }

    /**
     * Get one category
     */
    async getOneProduct(data) {
        console.log("data", data);
        const products = await ProductModel.findOne({_id: data.id});
        if(!products) {
            throw createError.Conflict("Get all products failed!")
        };
        return products;
    }

    /**
     * Get all categories
     */
    async getAllProducts() {
        const products = await ProductModel.find({}, {"__v": 0}).lean();
        if(!products) throw createError.Conflict("Get All Product error!");
        return products;
    }
}