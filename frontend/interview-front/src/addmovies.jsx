import { useState } from "react";
import { pushMovie ,getMovieName} from "../apis/browseMovie";


const AddMovies = () => {
const [movie , setMovie] = useState();
const [input , setInput] = useState();
const [searchItem , setSearchItem] = useState();

const handleInput = (event)=>{
 setInput(event.target.value);
}

const handleInput2 = (event)=>{
    setSearchItem(event.target.value);
}

const submitInput = () => {
    pushMovie();
}

const requestMovies = () => {
     getMovieName();
}

    return(
        <>
        <div className="movieTab">
           <div className="movieInput">
              <label className="form">
                  <span>Movie Name : </span>
                  <input type="text" value={input} placeholder="Add your movie..." onChange={handleInput}></input>
              </label>
                  <button onClick= {submitInput} >Add Movie</button>
            </div>

            <div className="movieInput">
                <div className="getMovie">
                    <label className="form">
                        <span>Enter Name of Movie</span>
                        <input type="text" placeholder="check added movies.." value = {searchItem}  onChange={handleInput2} ></input>
                    </label>
                      <button onClick= {getMovieName} >Browse Movies</button>
                </div>
            </div>

         </div>

         <div className="watched">
                <h5>Recent Movies </h5>
                <div className="displayMove">Empty list</div>
            </div>
       </>
    )
}

export default AddMovies