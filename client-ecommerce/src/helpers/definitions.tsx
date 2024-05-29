export type TProduct = {
    id:number,
    name: string,
    brandName:string,
    description:string,
    categoryId:number,
    availableSizes:Array<number>,
    productionDate:string,
    price:{
        current: {
            value: number,
            text: string
        }
    },
    imageUrl:string,
    additionalImageUrls: Array<TImages>
}

export type TImages = Array<string>

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
