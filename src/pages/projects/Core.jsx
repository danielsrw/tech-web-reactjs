import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter'
import Footer from '../../partials/Footer'

function Core(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Core</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Projects</li>
                                <li>Core</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>EVS</span> </h2>
                                    <h4><b>E</b>lectroni <b>V</b>isitors</h4>
                                    
                                    <p>
                                        “E-visitors system is more efficiency in automated attendance management using personal identifications” SAN TECH is a Smart technologies delighted service provider based in Rwanda with a vision to develop a tech hub which work on automation product development and equips youth and people in Digital unlocking innovation through training, internships, development (manufacturing) and career guidance to contribute to the national and regional ICT sector development.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-3">
                                <img src="https://www.tripsavvy.com/thmb/gk7NEmDJuF1Uwg_9BFbCNu5gsms=/2624x3936/filters:fill(auto,1)/TAM_3402-08aeec8bf338425791ce0825cb205e9a.jpg" alt="About" data-aos="zoom-in" data-aos-delay="100" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id='why-us' className="col-lg-12">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <h3>Solution to:</h3>
                            <p>
                                Taking overall responsibility for the ‘how-to’ project part Taking your budget limits seriously Taking the deadlines seriously Transparent service supported by regular reports (KPIs) Regular project roadmap revision Cultivating continuous improvement Tailored communication with each stakeholder
                            </p>
                        </div>
                    </div>
                </section>
                
                <Newsletter />
            </main>

            <Footer />
        </>
    );
}

export default Core;