var express = require('express');
var response = require('../public/javascripts/retriveMovies');

var fetchedMovie = express.Router();
var findMovies = require('../public/javascripts/retriveMovies')

fetchedMovie.get("/api/fetch",async (req,res)=>{
  try{

    let movieItems = await req.body;
     findMovies(movieItems);

    res.json({success : true , message : response});

  }catch(error){
    res.status(500).json("internal server error,in fetching items from database")
  }
});

module.exports = fetchedMovie;