import { Router } from "express";
import  * as controller from './controller.js'
import multer from "multer";
import path from "path";

const storage=multer.diskStorage({
    destination:"./images",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

const router=Router()
router.route('/').post(upload.single("profile"),controller.form)
router.route('/get').get(controller.gets)
router.route("/image/:filename").get((req, res) => {
    let { filename } = req.params;
    return res.sendFile(path.resolve(`./images/${filename}`))
})


export default router