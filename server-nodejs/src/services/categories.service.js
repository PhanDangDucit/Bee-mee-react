import { CategoriesModel } from "../models/Categories.model";

export class CategoriesService {
    async getAllCategories() {
        return await CategoriesModel.find().lean();
    }

    async addCategory(data) {
        return await CategoriesModel.create(data);
    }
}