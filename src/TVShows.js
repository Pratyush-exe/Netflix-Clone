import React from 'react'
import Row from './Row'
import requests from './api'
import './styles/TVShows.css'

function TVShows() {
    let num=0;
    return (
        <div className='TVShows'>
            <h1 className="tvshows-title">TV Shows</h1>
            <Row title="Popular Shows on Netflix" isOriginal url={requests.fetchPopularTV} num={num} key={num}/>{num=num+1}
            <Row title="Trending Shows on Netflix" isTrending url={requests.fetchTrendingTV} num={num} key={num}/>{num=num+1}
            <Row title="Top-rated Shows on Netflix" url={requests.fetchTopRatedTV} num={num} key={num}/>{num=num+1}        
            <Row title="Action" url={requests.fetchActionTV} num={num} key={num}/>{num=num+1}
            <Row title="Comedy" url={requests.fetchComedyTV} num={num} key={num}/>{num=num+1}
            <Row title="Talk" url={requests.fetchTalkTV} num={num} key={num}/>{num=num+1}
            <Row title="Mystery" url={requests.fetchMysteryTV} num={num} key={num}/>{num=num+1}
            <Row title="Sci-Fi" url={requests.fetchSciFiTV} num={num} key={num}/>{num=num+1}
            <Row title="Animation" url={requests.fetchAnimationTV} num={num} key={num}/>{num=num+1}
            <Row title="Romance" url={requests.fetchRomanceTV} num={num} key={num}/>{num=num+1}
            <Row title="Documentary" url={requests.fetchDocumentariesTV} num={num} key={num}/>{num=num+1}
        </div>
    )
}

export default TVShows
