import { ProductService } from "../services/product.service";
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
     * Get product
     */
    async getOneProduct(req, res, next) {
        return productService.getOneProduct();
    }

    /**
     * Get all products
     */

    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts();
            res.json({products});
        } catch (err) {
            next(err);
        }
    } 
}

// const data = {
//     id,
//     name,
//     description,
//     categoryId,
//     "size": [
//        "M",
//        "L",
//        "S"
//     ],
//     "productionDate": (new Date()).toISOString(),
//     "price": {
//         "current": {
//             "value": price,
//             "text": `$${price}.00`
//         }
//     },
//     brandName,
//     imageUrl,
//     "additionalImageUrls": [
//         imageUrl,
//         imageUrl,
//         imageUrl
//     ]
// };