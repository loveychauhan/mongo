import { v2 as cloudinary } from 'cloudinary';


async function cloudinaryUpload() {
    cloudinary.config({
        cloud_name: '0000000ri',
        api_key: '*********871',
        api_secret: '********RYk'
    });
}


export default cloudinaryUpload



