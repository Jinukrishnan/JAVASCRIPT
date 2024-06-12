import contactShema from './models/contact.model.js'
import path from 'path'
import fs from 'fs'
import express from 'express'
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

