import dotenv from "dotenv";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./db/index.js";
import { DB_NAME } from './constants.js';
import { app } from "./app.js";

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });

// Alternative approach (IIFE directly in index.js):
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Error:", error);
//             throw error;
//         });
//
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.log("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })();
