const express=require('express');
const Note=require('../models/post');
const User=require('../models/user');
const router=express.Router();

router.get('/',async (req,res)=>{
    try{
        const posts=await Note.getAllPosts();
        res.send(posts);
    }catch(err){
        res.status(401).send({message: err.message});

    }
})

.put('/edit', async (req, res) => {
    try {
      let post = await Note.editPost(req.body);
      res.send({...post});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deletePost(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .post('/create', async (req, res) => {
    try {
      let post = await Note.createPost(req.body);
      res.send({...post})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


module.exports=router;


// const express=require('express');
// const Post=require('../models/post');
// const router=express.Router();

// router.get('/',(req,res)=>{
//     try{
//         const posts=Note.getPost();
//         res.send(posts);
//     }catch(err){
//         res.status(401).send({message: error.message});

//     }
// });
// module.exports=router;