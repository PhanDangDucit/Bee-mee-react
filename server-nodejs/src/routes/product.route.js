import express from 'express';
import { ProductController } from '../controllers/product.controller';
const productRouter = express.Router()

const productContructor = new ProductController();

productRouter.get('/:productId', productContructor.getOneProduct);
productRouter.delete('/:productId', productContructor.deleteProduct);
productRouter.put('/:productId', productContructor.updateProduct);
productRouter.post('/', productContructor.addProduct);
productRouter.get('/', productContructor.getAllProducts);

export {
    productRouter
}