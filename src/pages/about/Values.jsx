import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

function Values(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Values</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>About</li>
                                <li>Values</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="get-started" className="padd-section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                                <div className="feature-block">
                                    <img src="../../assets/img/svg/vr.svg" alt="img" />
                                    <h4>Mission</h4>
                                    <p>
                                        To deliver optimal Solutions with quality and services at a reasonable price. For us customer satisfaction is given a top priority. To deliver market - Defining- high Quality solutions that create value and reliable competitive advantage for our Clients around the world in smart Technology.
                                    </p>
                                    <a href="#">read more</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                                <div className="feature-block">
                                    <img src="../../assets/img/svg/research.svg" alt="img" />
                                    <h4>Vision</h4>
                                    <p>
                                        Becoming a Tech Hub which develop technology skills and products that facilitate human daily activities. We develop product that facilitate in data collection and in security for institutions and homes. We would like to sharpening skills of people to use technology in thinking about invention and innovation in product development and virtual reality.
                                    </p>
                                    <a href="#">read more</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="feature-block">
                                    <img src="../../assets/img/svg/hub.svg" alt="img" />
                                    <h4>Goals</h4>
                                    <p>
                                        Supporting the new talents and equipping young generations in trainings and innovations development for creating a future IT experts’ generation and career guidance.
                                        <br />
                                        To Bring inspiration and innovation to every sectors in the world. We focus on Improve Every Life through Innovative Giving in Education, Technology, Agriculture Community and the Environment.
                                    </p>
                                    <a href="#">read more</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='why-us' className="col-lg-12">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <h3>OUR VALUES</h3>
                            <p>
                                Our specialty lies in helping organizations to use their product or business effectively, in a way that supports their overall goals and strategic priorities. We value and expect integrity in all that we do. We recognize that the foundation of our growth and success is making each and every clients projects successfully. In working towards the achievement of the mandate and vision set out above, our Values aligned to :
                            </p>
                            <ul class="list-unstyled">
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Goal Driven</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Professionalism</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Integrity</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Transparency</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Empowerment</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Systems Networking</li>
                                <li style={{ color: 'white' }}><i class="vi bi-chevron-right"></i>Creative Excellence</li>
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

export default Values;