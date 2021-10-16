import React, {useState, useEffect} from 'react'
import axios from './axios';
import api from './api';
import './styles/Banner.css';
import  playImg from './images/play.png'
import  addImg from './images/add.png'

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(api.fetchTrending);
            setMovie(req.data.results[Math.floor(Math.random() * 19)]);
        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="Banner" style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(270deg, rgba(27,27,27,0.5) 0%, rgba(27,27,27,0.5) 100%), url("${baseImgUrl}${movie?.backdrop_path}")`,
            backgroundPosition: "center top",
        }}>
            <div className="Banner_Details">
                <h1 className='Banner_Title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='Banner_Buttons'>
                    <button className='Banner_Button'><img src={playImg} alt='playBanner'/>Play</button>
                    <button className='Banner_Button'><img src={addImg} alt='addBanner'/>My List</button>
                </div>
                <h1 className='Banner_descp'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='FadeBottom'></div>
        </header>
    )
}

export default Banner
