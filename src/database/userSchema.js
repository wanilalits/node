
import mongoose  from "mongoose"



const logModel=new mongoose.Schema({
    name:{
    type : String,
    require:true
},
username:{
    type : String,
    require:true  , 
unique :true
},
password:{
    type : String,
    require:true
} 
});
export const Log = mongoose.models.loginCollections|| mongoose.model('loginCollections',logModel);




/*
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({


});

const User =mongoose.models.loginIn || mongoose.model('loginIn', userSchema);
export default User


firstname:String,
    lastname:String,
    address:String,
    time:String,

*/