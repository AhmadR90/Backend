import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:Number,required:true,minLength:[8,"Password must be 8 characters long"],maxLength:[12,"Password should not exceed 12 numbers"]},
    otp:{type:Number,required:true},
    Role:["Admin","User"]
})
const User=new mongoose.model("User",userSchema)
export default User;
