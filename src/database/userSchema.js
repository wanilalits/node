
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
export const Log = mongoose.models.logincollections|| mongoose.model('logincollections',logModel);






const sensorlogModel=new mongoose.Schema({
    sensor:{
    type : String,
},
sw:{
    type : String,
     
},
btn:{
    type : String,

} ,
msg:{
    type : String,
   
} 


});
export const Sensor = mongoose.models.sensorCollections|| mongoose.model('sensorCollections',sensorlogModel);



