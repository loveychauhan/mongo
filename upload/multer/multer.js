import multer from "multer";
import data from "../model/data.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/')
    },
    filename: async (req, file, cb) => {
        // console.log(file)
        await data.create({
            avatar: file.originalname
        })
        cb(null, file.originalname)
    }

}
)

const upload = multer({ storage: storage })

export default upload