const express=require('express');
const cors=require('cors');

const Connection=require('./connection/db');
Connection();

const posts=require('./routes/posts');

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());

app.use('/api/posts',posts);

app.listen(3000,()=>{
    console.log("Server Running at 3000");
})