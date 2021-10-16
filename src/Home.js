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
        <Row title="Netflix Originals" isOriginal url={requests.fetchNetflixOriginals} num={num}/>{num=num+1}
        <Row title="Trending" isTrending url={requests.fetchTrending} num={num}/>{num=num+1}
        <Row title="Top Rated" url={requests.fetchTopRated} num={num}/>{num=num+1}
        <Row title="Action" url={requests.fetchActionMovies} num={num}/>{num=num+1}
        <Row title="Comedy" url={requests.fetchComedyMovies} num={num}/>{num=num+1}
        <Row title="Horror" url={requests.fetchHorrorMovies} num={num}/>{num=num+1}
        <Row title="Romance" url={requests.fetchRomanceMovies} num={num}/>{num=num+1}
        <Row title="Documentary" url={requests.fetchDocumentaries} num={num}/>{num=num+1}
    </div>
  );
}

export default Home;
