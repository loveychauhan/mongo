import { v2 as cloudinary } from "cloudinary"

export const home = (req, res) => {
    res.cookie('name', 'loveychauhan')
    
    res.render('home.ejs')
}
export const image = async (req, res) => {
    let path = req.file.path
    console.log(path)
    let image = await cloudinary.uploader.upload(path, {
        resource_type: "image"
    })
    console.log(image)

    res.json({
        message: "dne"
    })
}