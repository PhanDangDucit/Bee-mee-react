import express from 'express';
import { ProductController } from '../controllers/product.controller';
const productRouter = express.Router()

const productContructor = new ProductController();

productRouter.post('/', productContructor.addProduct);
productRouter.get('/', productContructor.getAllProducts);

export {
    productRouter
}