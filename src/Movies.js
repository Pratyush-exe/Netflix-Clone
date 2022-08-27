import React from 'react'
import Row from './Row'
import requests from './api'
import './styles/Movies.css'

function Movies() {
    let num=0;
    return (
        <div className='MoviesMain'>
            <h1 className="moviesMain-title">Movies</h1>
            <Row title="Popular Movies on Netflix" isOriginal url={requests.fetchPopularMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Trending Movies on Netflix" isTrending url={requests.fetchTrendingMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Top-rated Movies on Netflix" url={requests.fetchTopRatedMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>        
            <Row title="Action" url={requests.fetchActionMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Comedy" url={requests.fetchComedyMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Horror" url={requests.fetchHorrorMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Sci-Fi" url={requests.fetchSciFiMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Animation" url={requests.fetchAnimationMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Drama" url={requests.fetchDramaMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="War" url={requests.fetchWarMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Romance" url={requests.fetchRomanceMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
            <Row title="Documentary" url={requests.fetchDocumentaries} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        </div>
    )
}

export default Movies
