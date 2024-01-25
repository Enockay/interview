let mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect('mongodb+srv://myAtlasDBUser:Enockay23@myatlasclusteredu.bfx6ekr.mongodb.net/interviewProject')
        console.log("connected to database successfully Enock")

    }catch(error){
        console.log("error in connceting to the database ",error)
    }
}

module.exports = connectDB