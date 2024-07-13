import { CategoriesModel } from "../models/Categories.model";

export class CategoriesService {
    async getAllCategories() {
        return await CategoriesModel.find({}, {"__v": 0}).lean();
    }

    async addCategory(data) {
        return await CategoriesModel.create(data);
    }
}