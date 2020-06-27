const postController=require("../controllers/post");

const express=require("express");

const router=express.Router();


router.get("/",postController.getPosts);//sotto route della root principale di app.js / =>home

module.exports={router};