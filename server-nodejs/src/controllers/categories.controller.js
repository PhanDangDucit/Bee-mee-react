import { CategoriesService } from "../services/categories.service";

const categoriesService = new CategoriesService();

export class CategoriesController {
    
    async getAllCategories(req, res, next) {
        try{
            console.log("Body::", req.body);
            const data = await categoriesService.getAllCategories();
            return res.json({data});
        } catch (error) {
            next(error);
        }
    }

    async addCategory(req, res, next) {
        try{
            console.log("Body::", req.body);
            await categoriesService.addCategory(req.body);
            return res.json({
                status: 201,
                messsage: "Success!"
            });
        } catch (error) {
            next(error);
        }
    }
}