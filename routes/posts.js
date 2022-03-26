const Router=require('express').Router();
const {getPosts,createPost}=require('../controllers/posts');

Router.get('/',getPosts);
Router.post('/',createPost);

module.exports=Router;