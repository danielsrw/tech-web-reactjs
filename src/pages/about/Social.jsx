import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function Social(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Social Impacts</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>About</li>
                                <li>Social Impacts</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" className="about-us padd-section">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-5">
                                <div className="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>Social Impacts</span> </h2>
                                    
                                    <p>
                                        SAN Tech Ltd contributes to the development of the country through technological invention and innovation to the ICT industry (Made in Rwanda) by producing homemade products, raising the income to the GDP (Growth Domestic Products), contributing to the national and regional IT sector through educating young generations and enforce the career guidance for unlocking digital skills and improve productivity in existing daily job activities.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-3">
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

export default Social;