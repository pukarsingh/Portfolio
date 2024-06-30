import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Pukar Singh Pundir</span></span>
            <p className="introPara">Hard-working, goal-oriented, and a team player <br></br>seeking an opportunity to incorporate<br>
            </br> my skills and put them to use.........</p>
           
        </div>
        <img src="background.png" alt="Profile" className="bg" />
    </section>
  )
}

export default intro
