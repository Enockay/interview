import { useState } from 'react'
import './App.css';
import AddMovies from './addmovies';

function App() {

  return (
   <>
   <div className='head'>
      <h1><center>Movie SandBox</center></h1>
      <h4>Hello this is a simple movieBox which allows users to browse and  add movies to there sandBoxes</h4>
   </div>
   <div className='body'>
      <div className='movies'>
         <AddMovies/>
      </div>
      <div className='displays'>

      </div>
   </div>
    
   </>
  )
}

export default App
