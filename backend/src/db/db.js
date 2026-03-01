
import mongoose from "mongoose";

async function connectDB () {
    try {
        if(!process.env.DB_URL){
         throw new Error("DB URL is missing");
        }
        const responseConnection = await mongoose.connect(process.env.DB_URL) 
        console.log(" connecting ", responseConnection.connection.host);
    } catch (error) {
        console.log("DB conecction failed");
    }
}

export default connectDB;