import { authRouter } from "./auth.route";
import { categoriesRouter } from "./categories.route";
import { imageRouter } from "./images.route";
import { productRouter } from "./product.route";

export function routes(app) {
    app.use('/products', productRouter);
    app.use('/categories', categoriesRouter);
    app.use('/images', imageRouter);
    app.use('/auth', authRouter);
}