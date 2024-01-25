const mongoose = require('mongoose');

const availableMovie = mongoose.model('movies');
let response ;

const findMovies = async (item) => {
    try{
      const query = {item};
     
      const foundMovie = await availableMovie.find(query);

      if(foundMovie.length > 0){
         response = foundMovie.map((item)=>{
             item.name
         })
      }

    }catch(error){
       console.log("error in fetchung the movies present ")
    }
    return response;
}

module.exports = {findMovies,response}