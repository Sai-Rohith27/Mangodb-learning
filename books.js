import mongoose from "mongoose";
import path from "path";
import express from "express";
import { kMaxLength } from "buffer";

const bookschema=new mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type:String,
        MaxLength:70
    },
    price:{
        type:Number,
        default:0,
        min:[1,"please ente valid  number"]
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["comics"],
    },
    genre:[String]
});
     

const book=mongoose.model("book",bookschema);
        book.deleteMany({});
 let book1=new book({
    title:"Osho",
    autho:"Man",
    price:299,
    category:"comics",
    genre:["comics","superheroes","fiction"]
 });
 book1.save().then(res=>{console.log(res)}).catch((err)=>{console.log(err);
 }); 

async function main(){
    try{
     await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
     console.log("Connection Successfulllllll");
    }
    catch(err){
        console.log(err);
    }

}
main();