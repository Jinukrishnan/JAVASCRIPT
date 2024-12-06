import userSchema from './models/user.model.js';
import {promises as fs} from 'fs'
import {fileURLToPath} from 'url'
import {dirname,join} from 'path'

export async function addUser(req, res) {
    try {
        const image = req.file;
        console.log(req.file);
        const { email, username, phone } = req.body;
        console.log(email, username, phone);

        // Create the user and send a response only after it's done
        await userSchema.create({ email, username, phone, image });
        res.status(201).send({ msg: "success" });
        
    } catch (error) {
        console.error(error); // Optional: Log the error for debugging
        res.status(403).send({ msg: "user not added" });
    }
}

export async function getUsers(req,res) {
    const users=await userSchema.find();
    res.status(200).send(users)
}






export async function deleteData(req,res) {
        const{_id}=req.params
        const user=await userSchema.findOne({_id})
        console.log(user.image.filename);
        // get current file directory
        const __filename=fileURLToPath(import.meta.url);
        console.log(__filename);
        const __dirname=dirname(__filename);
        console.log(__dirname)
        const fullpath=join(__dirname,"/uploads/",user.image.filename);
        console.log(fullpath);
         await fs.unlink(fullpath);

         userSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"successfully deleted"})
         }).catch((error)=>{
            res.status(500).send({error:error})
         })
       
        
        
        

        
        
}
