import { ProductService } from "../services/product.service";
import { formartIdResponseDataMongoDb, formartIdResponseDataMongoDbForOneObject } from "../utils";
const productService = new ProductService();
export class ProductController {
    /**
     * Add product
     */
    async addProduct(req, res, next) {
        try{
            console.log("Body::", req.body);
            await productService.addProduct(req.body);
            return res.json({
                status: 201,
                messsage: "Success!"
            });
        } catch (error) {
            next(error);
        }
    }
    
    /**
     * Delete product
     */
    async deleteProduct(req, res, next) {
        try{
            console.log("Body::", req.params);
            await productService.deleteProduct(req.params.productId);
            return res.json({
                status: 201,
                messsage: "Success!"
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get product
     */
    async getOneProduct(req, res, next) {
        try {
            // console.log("req.params.productId ::>", req.params.productId);
            const product = await productService.getOneProduct({id: req.params.productId});
            // console.log("product::>>", product);
            res.json(formartIdResponseDataMongoDb(product));
        } catch (err) {
            next(err);
        }
    }

    /**
     * Get all products
     */

    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts();
            res.json(formartIdResponseDataMongoDb(products));
        } catch (err) {
            next(err);
        }
    } 
}
