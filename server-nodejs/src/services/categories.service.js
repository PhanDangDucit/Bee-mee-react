import { CategoriesModel } from "../models/Categories.model";

export class CategoriesService {
    async getAllCategories() {
        return await CategoriesModel.find({}, {"__v": 0}).lean();
    }
    
    async getCategory(productId) {
        return await CategoriesModel.findOne({_id: productId}, {"__v": 0}).lean();
    }

    async addCategory(data) {
        return await CategoriesModel.create(data);
    }
    
    async deleteCategory(data) {
        return await CategoriesModel.deleteOne({_id: data.categoryId});
    }
}