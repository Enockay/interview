var express = require('express');
var getMovieName = express.Router();

getMovieName.post("/api/movie", async (req,res) =>{
    try{
        const searchItem = await req.body;

    res.json({success : true, message : "nicely delivered"});

    }catch(error){
        res.status(500).json("internal server error in receiving movieName")
    }
   
})

module.exports = getMovieName;