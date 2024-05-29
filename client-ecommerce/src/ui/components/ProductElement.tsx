import { Link } from "react-router-dom";

const ProductElement = ({
  id,
  title,
  image,
  price
}:{
  id:number,
  title:string,
  image: string,
  price: string
}) => {
  return (
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={`https://${image}`}
              alt="product image"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/shop/product/${id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
    </div>
  );
};

export default ProductElement;
