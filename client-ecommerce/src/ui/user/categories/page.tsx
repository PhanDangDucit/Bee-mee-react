import LayoutUser from "@/ui/user/layout";
import LayoutHome from "@/ui/user/home/layout";
import ProductElement from "@/ui/components/ProductElement";
import { TCategories, TProduct } from "@/helpers/definitions";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { getAllEntity, getOneEntity } from "@/utils/axios-method";
import { useParams } from "react-router-dom";

export default function CategoriesPage() {
    const { id }  = useParams();
    
    const [products, setProducts] = useState<TProduct[]>([]);
    console.log("products::" + products);
    console.log("id::", id);
    const [category, setCategory] = useState<TCategories>();

    useEffect(() => {
        getAllEntity("products").then(datas => {
            datas.map((data: TProduct) => {
                if(data.categoryId == Number(id)) {
                    console.log("data >>>::", data);
                    setProducts([...products, data]);
                }
            })
            
        });
        getOneEntity("categories", id!).then( data => {
            setCategory(data);
        })
        return () => {
            setProducts([]);
        }
    }, [id])

    if(!products) return null;

    return (
        <LayoutUser>
            <LayoutHome>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-6xl text-center my-12 max-md:text-4xl text-accent-content uppercase">
                            {category?.name}
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map(
                                (product) => (
                                    <ProductElement
                                        key={nanoid()}
                                        id={product.id}
                                        title={product.name}
                                        image={product.imageUrl}
                                        price={product.price.current.text}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </main>
            </LayoutHome>
        </LayoutUser>
    )
}
