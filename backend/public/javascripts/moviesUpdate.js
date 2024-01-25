var Movie = require('./addItem');

const addMovie = async (input) => {
    try{

     const newMovie = new Movie({
        input
     })

    }catch(error){
        console.log('error occured add movies')
    }
}

module.exports = addMovie