import profileSchema from './schema/profile.model.js'
export async function form(req,res)
{
    console.log(req.file);
    console.log(req.body);


    const{name,email,phone}=req.body;
    // const profile=req.file;
    const profile=req.file;
    const result=await profileSchema.create({name,email,phone,profile})
    res.send({result:result})

    
}
export async function gets(req,res)
{
    const result=await profileSchema.find()
    console.log(result);
   res.send(result)
}