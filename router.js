import { Router } from "express";
import * as handler from './requestHandler.js'
import multer from 'multer'
import path from 'path'
// const date=new Date();

const storage=multer.diskStorage({
    destination:'./images',
    filename:(req,file,cb)=>{
        // console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix+"_"+file.originalname)
    }
})
const upload=multer({storage:storage})
const router=Router()
router.route('/add').post(upload.single('formFile'),handler.addMulter)
router.route('/get').get(handler.getMulter)
router.route('/image/:filename').get((req,res)=>{
    let {filename}=req.params;
  
    return res.sendFile(path.resolve(`./images/${filename}`))
})
router.route('/del/:id/:filename').delete(handler.deleteMulter)

export default router;