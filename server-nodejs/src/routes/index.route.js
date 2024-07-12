import { categoriesRouter } from "./categories.route";
import { productRouter } from "./product.route";

export function routes(app) {
    app.use('/products', productRouter);
    app.use('/categories', categoriesRouter);
}