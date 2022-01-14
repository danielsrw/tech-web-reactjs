import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function System(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>System Networking</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Services</li>
                                <li>System Networking</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>NETWORKING ACTIVITIES</span> </h2>
                                    <p>
                                        We offer service for installation, configuration and troubleshooting of a computer network in works on request and after acceptance of the estimate by the client.
                                    </p>
                                    <p>
                                        Out  Technicians modify, repair, and improve existing electronic products, equipment, and controls and will assist in developing new or updated electronic systems, components, or products.
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
                            <h3>Methodology - Agile:</h3>
                            <p>
                                the iterative approach with an emphasis on collaboration and continuous improvement.
                                <br />
                                <br />
                                Software is developed in small portions and new features are delivered on a regular basis.
                            </p>
                            <h3>Our Strengths of this service::</h3>
                            <ul class="list-unstyled">
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Definition of your needs.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Visit the site and proposal of suitable solutions.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Supply of materials necessary for the installation.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Installation of cables adapted to your computer park.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Server installation.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Installation of network switches.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Installation and configuration of server software.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Configuration of your computer network.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Access rights configuration.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Implementation of security tools.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </>
    );
}

export default System;