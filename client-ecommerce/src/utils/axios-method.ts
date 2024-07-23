
import axios from "axios";

export const getUrl = () => {
    // return "http://localhost:8080";
    return "http://localhost:8000";
}

export const getAllEntity = async(entity: string) => {
    const url = getUrl();
    return (await axios.get(`${url}/${entity}`)).data;
}

export const getOneEntity = async(entity: string, id:string) => {
    const url = getUrl();
    return (await axios.get(`${url}/${entity}/${id}`)).data;
}

export const addOneEntity = async(entity:string, data:unknown) => {
    const url = getUrl();
    axios({
        method: 'post',
        url: `${url}/${entity}/`,
        data
    });
}

export const editOneEntity = async(entity:string, data:unknown, id:string) => {
    const url = getUrl();
    axios.put(
        `${url}/${entity}/${id}`,
        data
    );
}

export const deleteEntity = async(entity:string, id:string) => {
    const url = getUrl();
    axios.delete(`${url}/${entity}/${id}`)
}
