
import express from 'express';
import { CategoriesController } from '../controllers/categories.controller';

const categoriesRouter = express.Router();

const categoriesContructor = new CategoriesController();

categoriesRouter.post('/', categoriesContructor.addCategory);
categoriesRouter.get('/', categoriesContructor.getAllCategories);

export {
    categoriesRouter
}