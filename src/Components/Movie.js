import React from 'react';
import MovieCard from './MovieCard';
import MovieHeader from './MovieHeader'
import '../styles/app.css';




function Movie() {
  return (
    <div className='container'>
      <MovieHeader/>
      <MovieCard/>
    </div>
  )
}

export default Movie;