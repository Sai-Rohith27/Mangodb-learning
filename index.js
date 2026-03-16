import mongoose from "mongoose";
import path from "path";
import express from "express";

// let url="https://localhost:8080/users";
async function main(){
 await mongoose.connect('mongodb://127.0.0.1:27017/college')
};

const userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:String,
    age:Number
});
const User=mongoose.model("User",userSchema);

// User.insertMany([
//     {
//         name:"toystrak",email:"tony@gmail.com",age:259
//     },
//     {
//         name:"avengers",email:"avenger@gmail.com",age:4550
//     },
//     {
//         name:"arey",email:"arey@gmail.com",age:40
//     }
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

User.find({age:{$gte:90}}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

main().then(()=>{
    console.log("Connection Successfull!");
}).catch((err)=>{
    console.log(err);
})