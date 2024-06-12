import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    number:{type:Number},
    profile:{type:Object}
})


export default mongoose.model.Contacts|| mongoose.model('Contact',contactSchema)