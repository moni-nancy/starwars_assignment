import React from 'react'
import axios from 'axios';
import Loader from './Loader';
import {useEffect, useState} from 'react'
import '../styles/app.css'
import { Backgrounds } from './Backgrounds';



const MovieCard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
 axios
 .get('https://swapi.dev/api/films')
 .then((response)=> {
  setData(response.data);
  setError(null);
 }) 

 .catch((error) => {
  setError(error);
  setData(null);
 })

 .finally(() => {
  setLoading(false);
 });

},

[]);


  return (
    <div className="main-container">
      {loading && <Loader/>}
      {error && <div>{`There was a problem fetching your data - ${error}`}</div>}

    <div className="card-container">
      {data && data.results.map((item, index) => {
        return(
          <div className='card-main'>
             <div className="card" key={item.episode_id} 
        style={{
          backgroundImage:`url(${Backgrounds[index]})`,
        }}
        >
          <div className='head-date'>
            <h3>{item.title}</h3>
           <span>{new Date(item.release_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
       <p className='opening-crawl'>{item.opening_crawl}</p>
        <p id='link'><a href="#">More Info</a></p>
       </div> 
          </div>
      
        );
      })}
   
    </div>
    
  </div>


 )





}


export default MovieCard;