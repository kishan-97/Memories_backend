const mongoose=require('mongoose');

const Connection=async() =>{
    try{
        const res=await mongoose.connect('mongodb://localhost:27017');
        console.log("Connection Succesfully Established");
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports=Connection;