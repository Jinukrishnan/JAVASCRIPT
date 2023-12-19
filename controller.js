import profileSchema from './schema/profile.model.js'
export async function form(req,res)
{
    console.log(req.files);
    console.log(req.body);


    const{name,email,phone}=req.body;
    // const profile=req.file;
    const {profile,banner}=req.files;
    const result=await profileSchema.create({name,email,phone,profile,banner})
    res.send({result:result})
    // res.end()

    
}
export async function gets(req,res)
{
    const result=await profileSchema.find()
    console.log(result);
   res.send(result)
}