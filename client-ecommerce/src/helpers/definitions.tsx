export type TProduct = {
    id:string,
    name: string,
    brandName:string,
    description:string,
    categoryId:number,
    productionDate:string,
    price:{
        current: {
            value: number,
            text: string
        }
    },
    size: "M" | "L" | "S",
    imageUrl: string,
    additionalImageUrls: Array<TImages>
}

export type TImages = string

export type TUser = {
    id: number,
    firstName: string,
    lastname: string,
    email:string,
    address: string,
    phone: string,
    username: string,
    password:string,
}

export type TCategories = {
    id: string,
    name: string,
}
