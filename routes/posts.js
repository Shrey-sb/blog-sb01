const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
//CREATE NEW POST
router.post("/",async(req,res)=>{
    const newPost =new Post(req.body);
    try{    
        const savedPost =  await newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err);
    }
   
})
//UPDATE POST
router.put("/:id",async(req,res)=>{

    try{
        const post= await Post.findById(req.params.id);
        
            if(post.username ===req.body.username){
                try{
                    const updatedpost = await Post.findByIdAndUpdate(req.params.id,{
                        $set :req.body,
                    }, 
                    {new:true}
                    );
                    res.status(200).json(updatedpost);
                }catch(err){
                    res.status(500).json(err);
                }
            }else {
                res.status(401).json("You can only update your posts!");
            }
       

    }catch(err){
        res.status(500).json(err);
    }
   
})

//DELETE POST
router.delete("/:id",async(req,res)=>{

    try{
        const post= await Post.findById(req.params.id);
        
            if(post.username ===req.body.username){
                try{
                   await post.delete();
                    res.status(200).json("post has been deleted");
                }catch(err){
                    res.status(500).json(err);
                }
            }else {
                res.status(401).json("You can only delete your posts!");
            }
       

    }catch(err){
        res.status(500).json(err);
    }
   
})

//GET POST
router.get("/:id",async(req,res)=>{

    try{
        const post= await Post.findById(req.params.id);
        
            
                    res.status(200).json(post);

    }catch(err){
        res.status(500).json(err);
    }
   
})
//GET ALL POSTS
router.get("/",async(req,res)=>{
    const username = req.query.user;
    const catname = req.query.cat;


    try{

        let posts;
        if(username){
            posts= await Post.find({username})
        }else if(catname){
            posts= await Post.find({categories:{
                $in :[catname]
            }
        })
        }else{
            posts = await Post.find();
        
        }
      
        
       res.status(200).json(posts);

    }catch(err){
        res.status(500).json(err);
    }
   
})
module.exports = router;