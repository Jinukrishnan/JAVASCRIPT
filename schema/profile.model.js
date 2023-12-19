import mongoose from "mongoose";


const profileSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    profile:{type:Object},
    banner:{type:Object}
})


export default mongoose.model.Profiles||mongoose.model('Profile',profileSchema)