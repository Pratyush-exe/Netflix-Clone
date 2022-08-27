import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import search from './images/search.png'
import notImg from './images/notification.png'
import avatar from './images/avatar.png'
import dropImg from './images/drop.png'

function Nav() {

    const [show, handleShow] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100){
                handleShow("NavBlack");
            }
            else {
                handleShow("");
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, [])

    const navMenu = [ 'Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];
    const links = ['/', '/tv', '/movies', '/popular', '/mylist'];

    return (
        <div className={`nav ${show}`}>
            <div className='LeftSide'>
                <img className="navLogo"
                    src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt="NetflixLogo"/>
                    
                {navMenu.map((menu, i) => (
                    <Link to={links[i]} style={{ color: 'inherit', textDecoration: 'inherit'}} key={`nav_${i}`}>
                        <h4 className="navMenu">{menu}</h4>
                    </Link>
                ))}
            </div>
            <div className='RightSide'>
                <img className="invertIcon"
                    src={search}
                    alt="search"
                />
                <img className="invertIcon"
                    src={notImg}
                    alt="notification"
                />
                <a href="https://github.com/Pratyush-exe">
                <img className="Avatar"
                    src={avatar}
                    alt="Avatar"
                    title='Pratyush Kumar Patnaik'
                /></a>
                <img className="invertIcon"
                    src={dropImg}
                    alt="drop"
                />                
            </div>
        </div>
    )
}

export default Nav
