import mongoose from "mongoose";

export default async function connaection(){
    const URL=process.env.DB_URL+process.env.DB_NAME
    const db=await mongoose.connect(URL)
    console.log("database connected");
    return db
}