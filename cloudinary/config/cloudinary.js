import { v2 as cloudinary } from 'cloudinary';

async function cloudinary1() {

    // Configuration
    cloudinary.config({
        cloud_name: 'drv6vorri',
        api_key: '458278539651463',
        api_secret: '_UicFdQvO-ajOuWx6dtRPLNLltk' // Click 'View API Keys' above to copy your API secret
    });
}

export default cloudinary1