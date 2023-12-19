import express from 'express';
import multer from 'multer';
import router from './router.js';
const app=express();
app.use(express.static('frontend'))
app.use(express.json())
app.use('/api',router)

app.listen(3001,()=>{
    console.log("server started");
})