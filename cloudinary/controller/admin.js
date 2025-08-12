import { v2 as cloudinary } from "cloudinary"

export const home = (req, res) => {
    res.cookie('name', 'loveychauhan')

    res.render('home.ejs')
}
export const image = async (req, res) => {
    let path = req.file.path
    // console.log(req.file.path)
    let image = await cloudinary.uploader.upload(path).catch((error) => {
        console.log(error);
    })
    console.log(image)

    if(image.secure_url){
        
    }

    res.json({
        message: "dne"
    })
}