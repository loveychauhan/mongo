import { v2 as cloudinary } from 'cloudinary';

async function cloudinary1() {

    // Configuration
    cloudinary.config({
        cloud_name: '********',
        api_key: '45********63',
        api_secret: '_UicFd*********NLltk' // Click 'View API Keys' above to copy your API secret
    });
}

export default cloudinary1