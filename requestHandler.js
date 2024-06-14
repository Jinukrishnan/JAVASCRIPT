import contactShema from './models/contact.model.js'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
export async function addMulter(req,res){
    const profile=req.file;
    const{fname,lname,phone}=req.body;
    const result=await contactShema.create({fname,lname,phone,profile})

    res.send({result:result})
}


export async function getMulter(req,res){
    const  data=await contactShema.find()
    res.status(200).send(data)
}

export async function deleteMulter(req,res){
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    console.log(__dirname);
    
    // res.status(200).send("hai")
    // console.log(req.params);
    const {id,filename}=req.params;
    console.log(req.params);
    const filepath=path.join(__dirname,'images',filename);
    console.log(filepath);
    fs.unlink(filepath, async(err) => { // Provide a callback function here
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error deleting file' });
        }
        await contactShema.deleteOne({_id:id});
        res.json({ message: 'File deleted successfully' });
      });
}

