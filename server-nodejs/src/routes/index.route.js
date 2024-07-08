import { productRouter } from "./product.route";

export function Routes(app) {
    app.use('/product', productRouter);
}