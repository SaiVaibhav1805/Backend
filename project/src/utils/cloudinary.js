import {v2 as cloudinary} from cloudinary;
import fs from "fs";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath) return console.log("local file path is required");
        const response=cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded successfully",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath);
        return null;
    }
}

cloudinary.v2.uploader.upload(localFilePath,
    {public_id:""},
function(error,result){console.log(result)});