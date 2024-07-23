import { CategoriesService } from "../services/categories.service";
import { formartIdResponseDataMongoDb } from "../utils";

const categoriesService = new CategoriesService();

export class CategoriesController {
    
    async getAllCategories(req, res, next) {
        try{
            // console.log("Body::", req.body);
            const categories = await categoriesService.getAllCategories();
            return res.json(formartIdResponseDataMongoDb(categories));
        } catch (error) {
            next(error);
        }
    }

    async getCategory(req, res, next) {
        try{
            // console.log("Body::", req.body);
            const category = await categoriesService.getCategory(req.params.categoryId);
            return res.json(formartIdResponseDataMongoDb(category));
        } catch (error) {
            next(error);
        }
    }

    async addCategory(req, res, next) {
        try{
            // console.log("Body::", req.body);
            await categoriesService.addCategory(req.body);
            return res.json({
                status: 201,
                messsage: "Success!"
            });
        } catch (error) {
            next(error);
        }
    }
    
    async deleteCategory(req, res, next) {
        try{
            // console.log("Body::", req.params);
            await categoriesService.deleteCategory(req.params);
            return res.json({
                status: 201,
                messsage: "Success!"
            });
        } catch (error) {
            next(error);
        }
    }
}