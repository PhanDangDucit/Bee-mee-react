import express from 'express';
import { ProductController } from '../controllers/product.controller';

const productRouter = express.Router()

const productContructor = new ProductController();

productRouter.post('/', productContructor.addProduct)

export {
    productRouter
}