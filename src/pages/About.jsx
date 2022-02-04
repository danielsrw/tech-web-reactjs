import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Testimony from '../components/Testimony';

function About(props) {
    return (
        <>
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">About Us</h2>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">About</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="about_history_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d_flex align-items-center">
                            <div className="about_content ">
                                <h2 className="title title_color">About Us <br />Our History<br />Mission & Vision</h2>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                                <a href="#" className="button_hover theme_btn_two">Request Custom Price</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="image/about_bg.jpg" alt="img" />
                        </div>
                    </div>
                </div>
            </section>

            <Services />

            <Testimony />

            <Footer />
        </>
    );
}

export default About;