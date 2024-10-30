
import mongoose from "mongoose";
import { Log } from "@/database/userSchema";
import { NextResponse } from "next/server";
import bcryprjs from 'bcryptjs'


const connectionStr = "mongodb+srv://lalilswani:KrGXqcaDbahGMmaL@cluster0.ygf21f6.mongodb.net/loginDatabase?retryWrites=true&w=majority&appName=Cluster0";

export const GET = async () => {
    await mongoose.connect(connectionStr)
    const data = await Log.find();
    return NextResponse.json({ result: data })
}


export const POST = async (reqest) => {
    let payload = await reqest.json();

    if (!payload.name  || !payload.username || !payload.password ) {
        return NextResponse.json(({ warning: "enter aa data "}), { status: 202 })
    }
    await mongoose.connect(connectionStr)
    
      let log = await Log.findOne({username:payload.username}) ;
       //await Log.deleteMany()
if (log)
{
    return NextResponse.json(({ sucess: true }), { status: 202 })}

    const salt =await bcryprjs.genSalt(12)
    const HashPassword =await bcryprjs.hash(payload.password, salt);
    payload.password=HashPassword;

 log = new Log(payload)
   await log.save()
   console.log("Saved")
    return NextResponse.json(({ sucess: true }), { status: 202 })
 
}
















//mongodb+srv://wanilalits:<db_password>@cluster0.eyv6m.mongodb.net/
//wanilalits
//SIWZKSIArUfhOV4V


/*
    try{
        const body =await NextRequest.json();
        const {name:name, id:id, password:password}=body;

        if (!name || !id || !password)

       { return new Response ("name", {status:401})}
       
       const user =await User.findOne({id});
       if (user)
       {
        return new Response ("ID exit", {status:400})
       }
const salt =await bcryprjs.genSalt(12)
const HashPassword =await bcryprjs.hash(password, salt);
const newUser = new User({
    name,
    id,
    password:HashPassword
})
await newUser.save();
return new Response ("Saved", {status:200})
    }
    catch(error )
    {
        return new Response (error, {status:401}) 
    }

*/
