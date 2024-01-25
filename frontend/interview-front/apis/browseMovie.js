
const pushMovie = async () => {
    let input;

  try{
     const pushedMovie = await fetch("http://localhost:3000/api/movie",{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify({input})
     })
  }catch(error){
     console.log('error occured in addin the movie ',error)
  }
}

const getMovieName = async () => {
    let input;
    try{
       const response = await fetch("http://localhost:3000/api/fetch",{
         method : 'POST',
         headers : {
            'content-type' : 'application/json'
         },
         body : JSON.stringify({input})
       });

    }catch(error){
        console.log("error in fetching user movies",error)
    }
}

export {pushMovie,getMovieName}