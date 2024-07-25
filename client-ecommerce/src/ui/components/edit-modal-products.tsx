import { TCategories, TProduct } from "@/helpers/definitions";
import {  editOneEntity, getAllEntity } from "@/utils/axios-method";
import { useEffect, useState } from "react";


export const UpdateModalProductsAdmin = ({
    product,
    onSet,
    products,
    categories
}:{
    product: TProduct,
    onSet: React.Dispatch<React.SetStateAction<TProduct[] | undefined>>,
    categories: TCategories[],
    products: TProduct[]
}) => {
    const [name, setName] = useState<string>(product["name"]);
    const [brandName, setBrandName] = useState<string>(product["brandName"]);
    const [description, setDesc] = useState<string>(product["description"]);
    const [categoryId, setCategoryId] = useState<number>(product["categoryId"]);
    const [price, setPrice] = useState<number>(product["price"]["current"]["value"]);
    const [imageUrl, setImage] = useState<string>(product["imageUrl"]);
    // useEffect(() => {
    //     getAllEntity("categories").then(data => setCategoryId(data[0].id));
    // }, [])
    if (!product) return;

    const handleSubmit = () => {
        const id = product["id"];
        const data = {
            id,
            name,
            description,
            categoryId,
            "size": [
               "M",
               "L",
               "S"
            ],
            "productionDate": (new Date()).toISOString(),
            "price": {
                "current": {
                    "value": price,
                    "text": `$${price}.00`
                }
            },
            brandName,
            imageUrl,
            "additionalImageUrls": [
                imageUrl,
                imageUrl,
                imageUrl
            ]
        };
        editOneEntity("products", data, id!);
        products.find((p, index) => {
            if(id == p.id) {
                products.splice(index, 1, data);
            }
        });
        console.log("Products::>><><>", products);
        onSet([...products])
    }
    return (
        <dialog
            id={`updateProductModal-${product["id"]}`}
            aria-hidden="true" 
            className="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* Modal header */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update Product</h3>
                        <form method="dialog">
                            <button
                                type="submit"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </form>
                    </div>
                    {/* Modal body */}
                    <div>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    defaultValue={name} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="Ex. Apple iMac 27“"
                                    onChange={(e) => setName(e.target.value)}    
                                />
                            </div>
                            <div>
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                <input
                                    type="text" name="brand" id="brand" 
                                    defaultValue={brandName}
                                    onChange={(e) => setBrandName(e.target.value)} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="Ex. Apple"
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input 
                                    type="number" 
                                    defaultValue={price} 
                                    name="price" id="price" 
                                    onChange={(e) => setPrice(Number(e.target.value))}    
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select 
                                    id="category" 
                                    defaultValue={categoryId}
                                    onChange={(e) => setCategoryId(Number(e.target.value))}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    {categories.map(
                                        (category) => (
                                            <option value={category["id"]} key={category["id"]}>
                                                {category["name"]}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label 
                                    htmlFor="description" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea 
                                    id="description"
                                    onChange={(e) => setDesc(e.target.value)}
                                    rows={5} 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    defaultValue={description}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label 
                                    htmlFor="image" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea 
                                    id="image"
                                    onChange={(e) => setImage(e.target.value)}
                                    rows={5} 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    defaultValue={description}
                                />
                            </div>
                        </div>
                        <form method="dialog">
                            <button 
                                type="submit"
                                onClick={handleSubmit}
                                className="btn text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    )
}