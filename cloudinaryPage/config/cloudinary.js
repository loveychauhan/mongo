import { v2 as cloudinary } from 'cloudinary';


async function cloudinaryUpload() {
    cloudinary.config({
        cloud_name: 'drv6vorri',
        api_key: '611398716875871',
        api_secret: 'NDLLuEcDX_5N4DKk7eiqYSRXRYk'
    });
}


export default cloudinaryUpload



