import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../partials/Header'
import Newsletter from '../../partials/Newsletter'
import Footer from '../../partials/Footer'

function Delivered(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Delivered</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Projects</li>
                                <li>Delivered</li>
                            </ol>
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
                                        <a href="#">Digital light switch with hands clamp</a>
                                        </h4>
                                        <span>1 <sat>st</sat>, January 2022</span>
                                        <br />
                                        <p>
                                            The sound activated on/off switch. With clap detection lights. 2 Claps turn on the lamp. 3 Claps turn on the TV. The Clapper can control one or two appliances at the same time. Set the dial to Home or Away.
                                        </p>
                                        <br />
                                        <a class="float-end readmore" href="#">read more</a>
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

export default Delivered;