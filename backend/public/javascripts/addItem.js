var mongoose = require('mongoose');

const dataSchema = new  mongoose.Schema({
    movieName : {
        type : String,
        required : true,
        lastUpdated : Date.now()
    }
});

const Movie = mongoose.model('movies', dataSchema);

module.exports = Movie;