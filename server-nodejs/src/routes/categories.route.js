
import express from 'express';
import { CategoriesController } from '../controllers/categories.controller';

const categoriesRouter = express.Router();

const categoriesContructor = new CategoriesController();

categoriesRouter.get('/:categoryId', categoriesContructor.getCategory);
categoriesRouter.delete('/:categoryId', categoriesContructor.deleteCategory);
categoriesRouter.get('/', categoriesContructor.getAllCategories);
categoriesRouter.post('/', categoriesContructor.addCategory);

export {
    categoriesRouter
}