import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function About(props) {
    return (
        <>
            <Header/>
            
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Overview</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>About</li>
                                <li>Overview</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" className="about-us padd-section">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-5">
                                <div className="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>SAN TECH</span> </h2>
                                    <h4><b>S</b>mart <b>A</b>pplication & <b>N</b>etworking <b>T</b>echnology</h4>
                                    
                                    <p>
                                        SAN TECH is a Smart technologies delighted service provider based in Rwanda with a vision to develop a tech hub which work on automation product development and equips youth and people in Digital unlocking innovation through training, internships, development (manufacturing) and career guidance to contribute to the national and regional ICT sector development.
                                    </p>
                                    <p>
                                        SAN Tech Ltd contributes to the development of the country through bring innovation to the industry (Made in Rwanda) by producing homemade products and raising the income to the GDP (Growth Domestic Products), Contributing to the national and regional IT sector by training young generations and enforce the career guidance through ICT Sector.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-3">
                                <img src="https://www.tripsavvy.com/thmb/gk7NEmDJuF1Uwg_9BFbCNu5gsms=/2624x3936/filters:fill(auto,1)/TAM_3402-08aeec8bf338425791ce0825cb205e9a.jpg" alt="About" data-aos="zoom-in" data-aos-delay="100" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id='why-us' className="col-lg-12">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <h3>WHY CUSTOMERS CHOOSE SAN TECH?</h3>
                            <p>
                                Taking overall responsibility for the ‘how-to’ project part ; Taking your budget limits seriously ; Taking the deadlines seriously ;Transparent service supported by regular reports (KPIs) ; Regular project roadmap revision;Cultivating continuous improvement and Tailored communication with each stakeholder
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

export default About;