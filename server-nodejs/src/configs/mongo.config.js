import mongoose from "mongoose";

export async function ConnectMongo () {
    const api = process.env.MONGO_URL;
    try {
        const conf = { 
            autoIndex: false
        }
        await mongoose.connect(`${api}`, conf);
        console.log("Connect database ok!");
    } catch (error) {
        console.log("Error when connect with Mongoose::", error)
    }
}