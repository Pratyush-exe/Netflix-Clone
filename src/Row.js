import React, {useState, useEffect} from 'react';
import axios from './axios';
import './styles/Row.css';
import playImg from './images/play.png';
import addImg from './images/add.png';
import likeImg from './images/like.png';
import dislikeImg from './images/dislike.png';

const baseImgUrl = "https://image.tmdb.org/t/p/w780";

function Row({title, url, isOriginal, isTrending, num}) {
  const [movies, setMovies] = useState([]);
  const [display, setDisplay] = useState();
  let count = 0;
  useEffect(() => {
    async function fetchData(){
        const req = await axios.get(url);
        if(isTrending)
          setMovies(req.data.results.slice(11, 20));
        else
          setMovies(req.data.results);
        return req;
    }
    fetchData();
  }, [url, isTrending]);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  const handleClick = (movie) => {
    const MovieMore = document.getElementById(`Movie_More-${num}`);
    const MovieMoreLeft = document.getElementById(`Movie_More_left-${num}`);
    const title = document.getElementById(`Movie_More_right_title-${num}`)
    const descp = document.getElementById(`Movie_More_right_descp-${num}`)
    const details = document.getElementById(`Movie_More_right_details-${num}`)

    if (display && display===movie) {
      setDisplay();
      MovieMore.style.visibility = 'hidden';
      MovieMore.style.height = '0px';
    } 
    else {
      setDisplay(movie);
      MovieMore.style.visibility = 'visible';
      MovieMore.style.height = '400px';
      MovieMoreLeft.style.backgroundImage = `url("${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}")`;
      title.textContent = movie?.title || movie?.name || movie?.original_name;
      descp.textContent = truncate(movie?.overview, 150);
      details.textContent = "☆ "+ (movie.vote_average || " ") + "  |  " 
        + (movie.adult?"R ":"PG") + "  |  " 
        + movie.original_language.toUpperCase()
    }
  }

  return (
    <div className= 'row'>
        <h2>{title}</h2>
        <div className="ListPosters">
            {movies.map(movie => (
              <>
                {isTrending?<h3 className='TrendingNums'>{count = count+1}</h3>:""}
                <img 
                    key = {movie.id}
                    onClick={() => handleClick(movie)}
                    className= {`rowPoster ${isOriginal && "rowPosterLarge"}`} 
                    src={`${baseImgUrl}${movie.poster_path}`} 
                    alt={movie.name}
                />
                </>
            ))}
        </div>
        <div id={`Movie_More-${num}`} className = 'Movie_More'>
          <div id={`Movie_More_left-${num}`} className = 'Movie_More_left' style={{
            backgroundSize: "cover",
            backgroundPosition: "center top",
            display: 'flex',
            justifyContent: 'flex-end',
        }}>
        <div className="ShadeMovieMore"></div>
        </div>
          <div id={`Movie_More_right-${num}`} className = 'Movie_More_right'>
              <h3 id={`Movie_More_right_title-${num}`} className = 'Movie_More_Title'> </h3>
              <h3 id={`Movie_More_right_details-${num}`} className = 'Movie_More_Details'> </h3>
              <h3 id={`Movie_More_right_descp-${num}`} className = 'Movie_More_Descp'> </h3>
              <div className="buttons">
                <div className="rightButtons">
                  <img src={playImg} className="inverted" alt="play"/>
                  <img src={addImg} className="inverted" alt="add"/>
                </div>
                <div className="leftButtons">
                    <img src={likeImg} className="inverted" alt="like"/>
                    <img src={dislikeImg} className="inverted" alt="dislike"/>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Row
