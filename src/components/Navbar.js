import React from 'react'
import {Link} from 'react-scroll'
import './Navbar.css';
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src="logo.png" alt="" className='portfolio'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>  
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link> 
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link> 
                              

            </div>
            <button className="desktopMenubtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
            }}>
                <img src="contact.png" alt="" className="contactImg" />contact me </button>
        </nav> 
    );
}