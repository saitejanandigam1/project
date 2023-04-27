const express=require('express');
const Post=require('../models/note');
const router=express.Router();

router.get('/',(req,res)=>{
    try{
        const posts=Note.getPost();
        res.send(posts);
    }catch(err){
        res.status(401).send({message: error.message});

    }
});

module.exports=router;