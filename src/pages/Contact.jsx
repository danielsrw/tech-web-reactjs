import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Newsletter from '../partials/Newsletter'
import Footer from '../partials/Footer'

function Contact(props) {
    return (
        <div>
            <Header />
            
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Contact</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Contact</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="contact" className="padd-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title text-center">
                            <h2>Contact</h2>
                            <p className="separator">
                                You can stop by our office and / or just use the contact form below for any questions and inquiries
                            </p>
                        </div>
                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-4 col-md-4">
                                <div className="info">
                                    <div>
                                        <i className="bi bi-geo-alt"></i>
                                        <p>Kigali - Rwanda, Nyarugenge - Muhima <br />11 KN 89 St , IBC Building -Ground floor</p>
                                    </div>
                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <p>santechrw@gmail.com</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-phone"></i>
                                        <p>+250 783 250 033 / +250 780 309 833</p>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-8">
                                <div className="form">
                                    <form action="" method="post" role="form" className="php-email-form">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}

export default Contact;