import mongoose from "mongoose";

export async function ConnectMongo () {
    try {
        const conf = { 
            autoIndex: false
        }
        await mongoose.connect(`${process.env.MONGO_URL}`, conf);
    } catch (error) {
        console.log("Error when connect with Mongoose::", error)
    }
}