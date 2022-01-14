import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function Tech(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Tech Hub</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Services</li>
                                <li>Tech Hub</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>TECH HUB</span> </h2>
                                    <p>
                                        We provide capacity building for human development in form of training in ICT, Embedded system development, workshops, tech entrepreneurship and more. We are a people centered community, focused on growing youth talents, sustaining businesses and developing capacity in digital sector and innovation development mindset
                                    </p>
                                    <p>
                                        We particular promoting investment in product and service development, technology transfer, social innovation, eco-innovation and public service applications, boosting demand, networking and clustering and open innovation through smart specialization, as well as support for technological and applied research activities, pilot lines, early product validation actions, advanced production capacities and first generation, especially in the field of generic technologies and the diffusion of general use technologies.
                                    </p>
                                    <p>
                                        SAN TECH, Tech Hub is a platform and opportunity to engage young minds positively, to build tech skills and capacity for both local and global relevance. 
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
                            <h3>Beneficiaries</h3>
                            <ul class="list-unstyled">
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Infrastructure for innovation and technology.</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Scientific and technological innovators</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>SMEs</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Youth communities</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Employees</li>
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

export default Tech;