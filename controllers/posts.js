const postMessage=require('../models/postMessage');

const getPosts=async(req,res)=>{
    try{
        const posts=await postMessage.find({});
        console.log(posts);
        res.status(200).json(posts);
    }
    catch(e)
    {
        res.send(e.message);
    }
}

const createPost=async(req,res)=>{
    try{
        const post=req.body;
        const newPost=new postMessage(post);
        await newPost.save();
        res.status(200).json(newPost);
    }
    catch(e){
        res.json(e.message);
    }
}


module.exports={getPosts,createPost}