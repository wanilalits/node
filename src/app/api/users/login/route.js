
import mongoose from "mongoose";
import { Log } from "@/database/userSchema";
import { NextResponse } from "next/server";
import bcryprjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const connectionStr = "mongodb+srv://lalilswani:KrGXqcaDbahGMmaL@cluster0.ygf21f6.mongodb.net/loginDatabase?retryWrites=true&w=majority&appName=Cluster0";

export const POST = async (reqest) => {
    let payload = await reqest.json();
   // console.log (payload)
    if ( !payload.username || !payload.password) {
        return NextResponse.json( "enter all data " , { status: 202 })
    }
    await mongoose.connect(connectionStr)

    let log = await Log.findOne({ username: payload.username });
   
    if (!log) {
       
        return NextResponse.json('user not found', { status: 202 })
    }
    //console.log (log)
const validpassword = await bcryprjs.compare(payload.password ,log.password)
if (!validpassword){
    return NextResponse.json('password not valid', { status: 202 })
}
 const tokenData ={username:payload.username, passward:log.password}
 //console.log(tokenData)
    const token = jwt.sign(tokenData, 'AnyJwtKey' , {expiresIn: '1d'});

    

    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
 



    const response = NextResponse.json( {data: [payload.username ,log.name], status: 202 })
    
  response.cookies.set('token', token,   {httpOnly:true} );
   

    return response;

}

