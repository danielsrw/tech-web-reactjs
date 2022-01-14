import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function Electronics(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Electronic Maintainance</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Services</li>
                                <li>Electronic Maintainance</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>Electronic maintenance</span> </h2>
                                    <p>
                                        We work for installing, maintaining and repairing electronic equipment, including the circuits, components, and related equipment used in electronic communications systems, telemetering, power systems, metering equipment, and remote control.
                                    </p>
                                    <p>
                                        Out Technicians modify, repair, and improve existing electronic products, equipment, and controls and will assist in developing new or updated electronic systems, components, or products.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-3">
                                <img src="https://www.tripsavvy.com/thmb/gk7NEmDJuF1Uwg_9BFbCNu5gsms=/2624x3936/filters:fill(auto,1)/TAM_3402-08aeec8bf338425791ce0825cb205e9a.jpg" alt="About" data-aos="zoom-in" data-aos-delay="100" />
                            </div>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </>
    );
}

export default Electronics;