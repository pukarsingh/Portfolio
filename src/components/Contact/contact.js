import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id="projects">
            <h1 className="contactPageTitle">Projects</h1>
            <p className="projectDesc"></p>

        </div>
        <div className="projectImgs">
            <a href=''><img src="images.jpeg" alt=" Covid-19 Trackor" className="projectImg" /></a>
            <a href='https://github.com/pukarsingh/visualisation-and-forecasting-stocks-using-machine-learning'><img src="Stock-Price-Prediction-using-Machine-Learning.webp" alt="" className="projectImg" /></a>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <div className="links">
            <a href='https://www.instagram.com/pukarsingh_03/'><img src="eps10-white-camera-abstract-line-art-icon-isolated-on-black-background-social-media-outline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile.jpg" alt="instagram" className="link" /></a>
           <a href='linkedin.com/in/pukar-singh-pundir-a36a71250'> <img src="6bab3017350ca04c6fa05569672bd31e.jpg" alt="linkedin" className="link" /></a>
            <a href='https://github.com/pukarsingh'><img src="unnamed.webp" alt="github" className="link" /></a>
           <a href='mailto:pspundir03@gmail.com'><img src="5072f1930ccdcc3aacaed27592a12ccc.png" alt="gmail" className="link" /></a>
          </div>

        </div>
        
    </section>
  )
}

export default Contact
