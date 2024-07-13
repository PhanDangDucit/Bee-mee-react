
export const unSelectFieldsInMongoDB = () => {

}

export const formartIdResponseDataMongoDb = (data) => {
    // array
    for (const field in data) {
        const {_id} = data[field];
        if(_id) {
            data[field].id = data[field]._id;
            delete data[field]._id;
        } else {
            break;
        }
    }
    // object
    if(data._id) {
        data.id = data._id;
        delete data._id;
    }
    console.log("data::>>>>>>>>>", data);
    return data;
}
