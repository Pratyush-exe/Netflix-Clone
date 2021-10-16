import React from 'react'
import Row from './Row'
import requests from './api'
import './styles/Movies.css'

function Movies() {
    let num=0;
    return (
        <div className='MoviesMain'>
            <h1 className="moviesMain-title">Movies</h1>
            <Row title="Popular Movies on Netflix" isOriginal url={requests.fetchPopularMovies} num={num}/>{num=num+1}
            <Row title="Trending Movies on Netflix" isTrending url={requests.fetchTrendingMovies} num={num}/>{num=num+1}
            <Row title="Top-rated Movies on Netflix" url={requests.fetchTopRatedMovies} num={num}/>{num=num+1}        
            <Row title="Action" url={requests.fetchActionMovies} num={num}/>{num=num+1}
            <Row title="Comedy" url={requests.fetchComedyMovies} num={num}/>{num=num+1}
            <Row title="Horror" url={requests.fetchHorrorMovies} num={num}/>{num=num+1}
            <Row title="Sci-Fi" url={requests.fetchSciFiMovies} num={num}/>{num=num+1}
            <Row title="Animation" url={requests.fetchAnimationMovies} num={num}/>{num=num+1}
            <Row title="Drama" url={requests.fetchDramaMovies} num={num}/>{num=num+1}
            <Row title="War" url={requests.fetchWarMovies} num={num}/>{num=num+1}
            <Row title="Romance" url={requests.fetchRomanceMovies} num={num}/>{num=num+1}
            <Row title="Documentary" url={requests.fetchDocumentaries} num={num}/>{num=num+1}
        </div>
    )
}

export default Movies
