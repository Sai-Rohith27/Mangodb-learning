import mongoose from "mongoose";
import path from "path";
import express from "express";

// let url="https://localhost:8080/users";
const userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:String,
    age:Number
});
const User=mongoose.model("User",userSchema);
async function main(){
    try{
     await mongoose.connect('mongodb://127.0.0.1:27017/college');
     console.log("Connection Successfulllllll");
      await User.deleteMany({});
    const inserted=await User.insertMany([
    {
        name:"toystrak",email:"tony@gmail.com",age:259
    },
    {
        name:"avengers",email:"avenger@gmail.com",age:4550
    },
    {
        name:"arey",email:"arey@gmail.com",age:40
    }
])
    console.log("Inserted:", inserted);

    const users = await User.find({ age: { $gte: 90 } });
    console.log("Users >= 90:", users);
await User.updateOne({name:"avengers"},{$set:{age:45}})
await User.updateMany({age:{$gt:2}},{$set:{age:1}});
const updated=await User.findOneAndUpdate({name:"avengers"},{$set:{name:"Av"}},{returnDocument: "after"});
console.log("Updated:",updated);
    }
    catch(err){
        console.log(err);
    }
};
main();
