import { TProduct } from "@/helpers/definitions";
import axios from "axios";

const getUrl = () => {
    return "http://localhost:8080";
}

export const getAllEntity = async(entity: string) : Promise<TProduct[]> => {
    const url = getUrl();
    return (await axios.get(`${url}/${entity}`)).data;
}

