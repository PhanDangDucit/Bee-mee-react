
const {Schema, model} = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = "Addresses";
const COLLECTION_NAME = "Address"
// Declare the Schema of the Mongo model
const addressSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = {
    address: model(DOCUMENT_NAME, userSchema)
};