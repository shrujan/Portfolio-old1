import React from 'react';
import './About.scss'

const About = (props) => {
    return (
        <main>
            <section className="about-section">
                <div className="util-center-text">
                    <h2 className="about-section-header util-margin-bottom-8">
                        More About me 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2 about-section__details">
                        <p>I am a web developer with over 6+ years of Experience in Front End Development</p>
                    </div>
                    <div className="col-1-of-2"></div>
                </div>
            </section> 
        </main>
        
    )
}

export default About;