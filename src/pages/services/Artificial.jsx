import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function Artificial(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Artificial Intelligent</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Services</li>
                                <li>Artificial Intelligent</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>Intelligent Systems</span> </h2>
                                    <p>
                                        We eagerly put effort in in Use IT Innovations through Stand-alone Embedded Systems, Real-time Embedded Systems, Network Embedded Systems and Mobile Embedded Systems.
                                    </p>
                                    <p>
                                        Industrial machines, consumer electronics, agricultural and processing industry devices, automobiles, medical equipment, cameras, digital watches, household appliances, airplanes, vending machines and toys, as well as mobile devices, are possible locations for an embedded system.
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

export default Artificial;