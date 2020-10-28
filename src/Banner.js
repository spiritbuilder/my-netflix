import axios from './axios';
import React, {useEffect, useState} from 'react';
import requests from "./requests";
import "./Banner.css";

export default function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        //if[], run once when the row loads and dont run it again 
        async function fetchData(){
         const request =  await axios.get(requests.fetchNetflixOriginals);
         console.log(request);
         setmovie(request.data.results[Math.floor(Math.random())]);
         return request;
        } 
        fetchData();
     }, []);
console.log(movie);
    
    function truncate (str, n){
        return str?.length>n ? str.substr(0,n-1) +"...": str;
    }
    const overview = truncate(movie.overview)
    const moviepath = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(${moviepath})`,
            backgroundPosition:"center center",
        }}>
            <div className="banner_contents">
                <h1  className="banner_title">{movie?.title|| movie?.name|| movie?.original_name }</h1>
                <div>
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                   {overview}
                </h1>

            </div>
            <div className="banner--fadeButton" />
        </header>
    )
}
