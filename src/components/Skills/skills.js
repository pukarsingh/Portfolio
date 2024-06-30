import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a Student and Currently working on web development</span>
        <div className="skillsBar">
            <img src="c-.png" alt="C language" className="skillsBarImg" />
            <div className="skillsBarText">
               <h2>C Language</h2>
            </div>
        </div>
        <div className="skillsBar">
            <img src="c-logo.png" alt="C++ Language" className="skillsBarImg"/> 
            <div className="skillsBarText">
                <h2>C++ Language</h2>

            </div>
        </div>
        <div className="skillsBar">
            <img src="Python.svg" alt="Python Language" className="skillsBarImg" />
            <div className="skillsBarText">
                <h2>Python Language</h2>
            </div>
        </div>
        <div className="skillsBar">
            <img src="java.png" alt="Java Language" className="skillsBarImg" />
            <div className="skillsBarText">
                <h2>Java Language</h2>
            </div>
        </div>
        <div className="skillsBar">
            <img src="html.png" alt="HTML Language" className="skillsBarImg"/>
            <div className="skillsBarText">
                <h2>HTML Language</h2>
            </div>
        </div>
        <div className="skillsBar">
            <img src="css-3.png" alt="CSS Language" className="skillsBarImg"/>
            <div className="skillsBarText">
                <h2>CSS Language</h2>
            </div>
        </div>
        <div className="skillsBar">
            <img src="java-script.png" alt="JavaScript Language" className="skillsBarImg" />
            <div className="skillsBarText">
                <h2>JavaScript Language</h2>
            </div>
        </div>
        <div className="skillsBar">
            <img src="mysql.png" alt="SQL Language" className="skillsBarImg" />
            <div className="skillsBarText">
                <h2>SQL Language</h2>
            </div>
        </div>
    </section>
  )
}

export default Skills;
