import { addOneEntity, getAllEntity, getUrl } from "@/utils/axios-method"
import { useEffect, useState } from "react"
import { TCategories, TProduct } from "@/helpers/definitions";
import { createIdRondom } from "@/utils/create-id-random";
import { FormUploadImage } from "./form-upload-image";

export const CreateModalProductsAdmin = ({
    products,
    onSet,
    categories
}:{
    products: TProduct[],
    onSet: React.Dispatch<React.SetStateAction<TProduct[] | undefined>>,
    categories: TCategories[]
}) => {
    const [name, setName] = useState<string>("");
    const [brandName, setBrandName] = useState<string>("");
    const [description, setDesc] = useState<string>("");
    const [categoryId, setCategoryId] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [imageUrl, setImage] = useState<string>("");

    useEffect(() => {
        getAllEntity("categories").then(data => setCategoryId(data[0].id));
    }, [])
    
    const handleSubmit = () => {
        if(getUrl() === "http://localhost:8080") {
            const id = createIdRondom();
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
            addOneEntity("products", data);
            onSet([...products, data]);
        } else {
            const data = {
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
            addOneEntity("products", data);
            onSet([...products, data]);
        }
        setName("")
        setBrandName("")
        setDesc("")
        setPrice(0)
        setCategoryId(0)
        setImage("")
    }
    return (
        <>
            {/* Create modal */}
            <dialog 
                id="createProductModal"                
                className="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="modal-box relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* Modal header */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h3>
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
                                    <label htmlFor="create-product-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input 
                                        type="text" id="create-product-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="name..." required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}    
                                    />
                                </div>
                                <div>
                                    <label htmlFor="create-product-brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                    <input
                                        type="text" id="create-product-brand" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Product brand" required
                                        value={brandName}
                                        onChange={(e) => setBrandName(e.target.value)}    
                                    />
                                </div>
                                <div>
                                    <label htmlFor="create-product-price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input 
                                        type="number" id="create-product-price" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="$0" required
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}    
                                    />
                                </div>
                                <div>
                                    <label htmlFor="create-product-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select 
                                        id="create-product-category" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        defaultValue={"Select category"}
                                        onChange={(e) => {
                                            setCategoryId(Number(e.target.value));
                                            console.log("e.target.value:", e.target.value);
                                        }}
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
                                        htmlFor="create-product-description" 
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Description
                                    </label>
                                    <textarea 
                                        id="create-product-description" 
                                        rows={4} 
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product description here"
                                        defaultValue={description}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                </div>
                                {/* <div className="sm:col-span-2">
                                    <label 
                                        htmlFor="create-product-image" 
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Image
                                    </label>
                                    <textarea 
                                        id="create-product-image" 
                                        rows={4} 
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write product description here"
                                        defaultValue={imageUrl}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </div> */}
                                <FormUploadImage onSet={setImage}/>
                            </div>
                            <form method="dialog">
                                <button 
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="btn text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}