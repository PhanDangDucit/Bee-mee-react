
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

export const uploadOneImage = async(file: File, fieldFile: string) => {
    const url = getUrl();
    const formData = new FormData();
    formData.append(fieldFile, file);
    return (await axios.post(`${url}/images/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })).data
}

export const auth = async(path: string, data : {email: string, password: string}) => {
    const url = getUrl();
    return (await axios({
        method: 'post',
        url: `${url}/auth/${path}`,
        data
    })).data;
}