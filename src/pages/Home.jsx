import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header'
import Hero from '../partials/Hero';
import Newsletter from '../partials/Newsletter';

function Home(props) {
    return (
        <>
            <Header />

            <Hero />
            
            <main id="main">
                <section id="get-started" className="padd-section text-center">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title text-center">
                            <h2>Our Stretch</h2>
                            <p className="separator">What we want to build</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                                <div className="feature-block">
                                    <img src="assets/img/svg/vr.svg" alt="img" />
                                    <h4>Virtual Reality (VR) Technology</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                                <div className="feature-block">
                                    <img src="assets/img/svg/research.svg" alt="img" />
                                    <h4>Research and Product Development Tech</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="feature-block">
                                    <img src="assets/img/svg/hub.svg" alt="img" />
                                    <h4>Tech (Innovation / Carreer) Development Hub</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <a href="#">read more</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="about-us" class="about-us padd-section">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-center">
                            <div class="col-md-5 col-lg-3">
                                <img src="https://www.tripsavvy.com/thmb/gk7NEmDJuF1Uwg_9BFbCNu5gsms=/2624x3936/filters:fill(auto,1)/TAM_3402-08aeec8bf338425791ce0825cb205e9a.jpg" alt="About" data-aos="zoom-in" data-aos-delay="100" />
                            </div>
                            <div class="col-md-7 col-lg-5">
                                <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                    <h2><span>About Us?</span> Who we are!</h2>
                                    <p>
                                        SAN TECH LTD is a private company created and based in Kigali, Rwanda by young Rwandan Software Engineers to contribute to the national and regional IT sector, driving technology evolution towards next level in Rwanda and abroad.
                                    </p>
                                    <h5>Our Services</h5>
                                    <ul class="list-unstyled">
                                        <li><Link to="/services/software-dev"><i class="vi bi-chevron-right"></i>Software Development</Link></li>
                                        <li><Link to="/services/software-dev"><i class="vi bi-chevron-right"></i>Artifical Intelligent</Link></li>
                                        <li><Link to="/services/software-dev"><i class="vi bi-chevron-right"></i>Electronic Maintainance</Link></li>
                                        <li><Link to="/services/software-dev"><i class="vi bi-chevron-right"></i>Graphic Design</Link></li>
                                        <li><Link to="/services/software-dev"><i class="vi bi-chevron-right"></i>Systems Networking</Link></li>
                                        <li><Link to="/services/software-dev"><i class="vi bi-chevron-right"></i>Tech Hub</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog" class="padd-sectio">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title text-center">
                            <h2>LATEST STORY</h2>
                            <p class="separator">WE DO WRITE INTERESTING TECH STORIES</p>
                        </div>
                        <div class="row" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-md-6 col-lg-4">
                                <div class="block-blog text-left">
                                    <a href="#">
                                        <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="img" />
                                    </a>
                                    <div class="content-blog">
                                        <h4>
                                        <a href="#">San Tech Ltd - Finnish partner</a>
                                        </h4>
                                        <span>1 <sat>st</sat>, January 2022</span>
                                        <a class="float-end readmore" href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="block-blog text-left">
                                    <a href="#">
                                        <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="img" />
                                    </a>
                                    <div class="content-blog">
                                        <h4>
                                        <a href="#">Claudine is the Co-Founder and Data Analyst at SAN TECH Ltd</a>
                                        </h4>
                                        <span>1 <sat>st</sat>, January 2022</span>
                                        <a class="float-end readmore" href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="block-blog text-left">
                                    <a href="#">
                                        <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="img" />
                                    </a>
                                    <div class="content-blog">
                                        <h4>
                                        <a href="#">E-Visitors System Development</a>
                                        </h4>
                                        <span>1 <sat>st</sat>, January 2022</span>
                                        <a class="float-end readmore" href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" class="padd-section text-center">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title text-center">
                            <h2>Testimonials</h2>
                            <p class="separator">WHAT THEY ARE SAYING ABOUT US</p>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="testimonials-content">
                                    <div id="carousel-example-generic" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner" role="listbox">
                                            <div class="carousel-item  active">
                                                <div class="top-top">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                        specimen book. It has survived not only five centuries.</p>
                                                    <h4>Fullnames<span>Title</span></h4>
                                                </div>
                                            </div>
                                            <div class="carousel-item ">
                                                <div class="top-top">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                        specimen book. It has survived not only five centuries.</p>
                                                    <h4>Fullnames<span>Title</span></h4>
                                                </div>
                                            </div>
                                            <div class="carousel-item ">
                                                <div class="top-top">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                                        specimen book. It has survived not only five centuries.</p>
                                                    <h4>Fullnames<span>Title</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btm-btm">
                                            <ul class="list-unstyled carousel-indicators">
                                                <li data-bs-target="#carousel-example-generic" data-bs-slide-to="0" class="active"></li>
                                                <li data-bs-target="#carousel-example-generic" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#carousel-example-generic" data-bs-slide-to="2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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

export default Home;