import React, { useRef, useState } from "react";

import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination } from 'swiper';

import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import Newsletter from '../../partials/Newsletter';

// install Swiper modules
SwiperCore.use([FreeMode,Pagination]);

function Gallery(props) {
    return (
        <>
            <Header/>

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Gallery</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>About</li>
                                <li>Gallery</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="screenshots" className="padd-section text-center">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title text-center">
                            <h2>Our Gallery</h2>
                            <p className="separator">"A picture can mean a thousand things with saying anything"</p>
                        </div>

                        <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{ "clickable": true }} className="mySwiper">
                            <SwiperSlide>
                                <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </>
    );
}

export default Gallery;