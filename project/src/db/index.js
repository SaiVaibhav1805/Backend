import mongoose from "mongoose";
import dns from "dns";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
        const connectionInstance = await mongoose.connect
            (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB:HOST : ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("Error connecting to database:", error);
        process.exit(1)
    }
}

export default connectDB;