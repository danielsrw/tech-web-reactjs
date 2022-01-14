import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function Software(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Software Development</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Services</li>
                                <li>Software Development</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>Software Development</span> </h2>
                                    <p>
                                        We use the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. In all we do we use the process consists of various stages: Planning, Analysis, Product Design, Development & Implementation, Testing, Maintenance.
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
                            <h3>Our Focus:</h3>
                            <ul class="list-unstyled">
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Custom Software Development</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Web Application Development.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Web Development.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Mobile Application Development</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Cloud Consulting</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>DevOps Automation</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Software Prototyping</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Quality Assurance</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Systems Integration</li>
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

export default Software;