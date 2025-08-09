import { v2 as cloudinary } from 'cloudinary';

async function cloudinary1() {

    // Configuration
    cloudinary.config({
        cloud_name: '*********',
        api_key: '******',
        api_secret: '***********' // Click 'View API Keys' above to copy your API secret
    });
}

export default cloudinary1
