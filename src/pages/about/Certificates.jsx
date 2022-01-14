import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header'

function Cartificates(props) {
    return (
        <>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Certificates</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>About</li>
                                <li>Certificates</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="screenshots" className="padd-section text-center">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title text-center">
                            <h2>Our Certificates</h2>
                            <p className="separator">Make ideas happen</p>
                        </div>
                        <div className="screens-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide">
                                    <img src="https://www.saharatoursandtravel.com/wp-content/uploads/2019/06/BEST-PLACES-TO-VISIT-IN-RWANDA.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.aasafaristours.com/wp-content/uploads/Kigali-rwanda-.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.visitvolcanoesnationalpark.com/wp-content/uploads/2020/02/Kigali-City.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.kigaliwalktour.com/wp-content/uploads/2018/10/Kigali-Convetion-Centre.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.loyaltoursandsafaris.com/wp-content/uploads/2021/03/kigali-city-Rwanda.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d4/4b/08/hotel-exterior.jpg?w=900&h=-1&s=1" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.nevistas.com/ul/4/2016/07/11/11.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.goldenrwanda.com/IMG/rubon66.jpg?1525387527" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="http://2018.fpconference.org/wp-content/uploads/2017/11/Kigali-Convention-Center.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/53/dd/4e/hotel.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.richdestination.com/wp-content/uploads/2019/02/conv1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/0c/53/dc/ae/kigali-convention-centre.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://www.ktpress.rw/wp-content/uploads/2020/01/fireworks.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Cartificates;