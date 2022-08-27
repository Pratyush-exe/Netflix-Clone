import './styles/Home.css';
import React from 'react';
import Row from './Row';
import requests from './api';
import Banner from './Banner';

function Home() {
  let num=0;
  return (
    <div className="Home">
        <Banner />
        <Row title="Netflix Originals" isOriginal url={requests.fetchNetflixOriginals} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Trending" isTrending url={requests.fetchTrending} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Top Rated" url={requests.fetchTopRated} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Action" url={requests.fetchActionMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Comedy" url={requests.fetchComedyMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Horror" url={requests.fetchHorrorMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Romance" url={requests.fetchRomanceMovies} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
        <Row title="Documentary" url={requests.fetchDocumentaries} num={num} key={num}/><div style={{display: 'none'}}>{num=num+1}</div>
    </div>
  );
}

export default Home;
