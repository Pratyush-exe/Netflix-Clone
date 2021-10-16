import React from 'react'
import Row from './Row'
import requests from './api'
import './styles/Popular.css'

function Popular() {
    let num=0;
    return (
        <div className='Popular'>
            <h1 className="Popular-title">New & Popular</h1>
            <Row title="Popular Movies on Netflix" url={requests.fetchPopularMovies} num={num}/>{num=num+1}
            <Row title="Popular Shows on Netflix" url={requests.fetchPopularTV} num={num}/>{num=num+1}
            <Row title="Popular Action Movies" url={requests.fetchPopularActionM} num={num}/>{num=num+1}
            <Row title="Popular Action Shows" url={requests.fetchPopularActionT} num={num}/>{num=num+1}
            <Row title="Popular Comedy Movies" url={requests.fetchPopularComedyM} num={num}/>{num=num+1}
            <Row title="Popular Comedy Shows" url={requests.fetchPopularComedyT} num={num}/>{num=num+1}
            <Row title="Popular Animation Movies" url={requests.fetchPopularAnimationM} num={num}/>{num=num+1}
            <Row title="Popular Animation Shows" url={requests.fetchPopularAnimationT} num={num}/>{num=num+1}
            <Row title="Popular Crime Movies" url={requests.fetchPopularCrimeM} num={num}/>{num=num+1}
            <Row title="Popular Crime Shows" url={requests.fetchPopularCrimeT} num={num}/>{num=num+1}
            <Row title="Popular Family Movies" url={requests.fetchPopularFamilyM} num={num}/>{num=num+1}
            <Row title="Popular Family Shows" url={requests.fetchPopularFamilyT} num={num}/>{num=num+1}
            <Row title="Popular Mystery Movies" url={requests.fetchPopularMysteryM} num={num}/>{num=num+1}
            <Row title="Popular Mystery Shows" url={requests.fetchPopularMysteryT} num={num}/>{num=num+1}
            <Row title="Popular Romantic Movies" url={requests.fetchPopularRomanticM} num={num}/>{num=num+1}
            <Row title="Popular Romantic Shows" url={requests.fetchPopularRomanticT} num={num}/>{num=num+1}
            <Row title="Popular Documentary Movies" url={requests.fetchPopularDocumentaryM} num={num}/>{num=num+1}
            <Row title="Popular Documentary Shows" url={requests.fetchPopularDocumentaryT} num={num}/>{num=num+1}
        </div>
    )
}

export default Popular
