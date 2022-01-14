import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="footer-logo">
                                <a className="navbar-brand" href="#">SanTech</a>
                                <p>
                                    Kigali,Rwanda Nyabugogo-Muhima Road Nyarugenge 11 KN 89 St,1st floor Maison Voisin Building Muhima, Kigali, RWANDA
                                </p>
                                <p>
                                    <b>Phone:</b> +250 783 250 033
                                </p>
                                <p>
                                    <b>Email:</b> santechrwanda@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="list-menu">
                                <h4>Quick Links</h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/about/overview">About us</Link></li>
                                    <li><Link to="/apply">Apply</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="list-menu">
                                <h4>Services</h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/services/software-dev"><i className="vi bi-chevron-right"></i>Software Development</Link></li>
                                    <li><Link to="/services/ai"><i className="vi bi-chevron-right"></i>Artifical Intelligent</Link></li>
                                    <li><Link to="/services/electronic"><i className="vi bi-chevron-right"></i>Electronic Maintainance</Link></li>
                                    <li><Link to="/services/graphic-design"><i className="vi bi-chevron-right"></i>Graphic Design</Link></li>
                                    <li><Link to="/services/system"><i className="vi bi-chevron-right"></i>Systems Networking</Link></li>
                                    <li><Link to="/services/tech"><i className="vi bi-chevron-right"></i>Tech Hub</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <div className="list-menu">
                                <h4>Support</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">faq</a></li>
                                    <li><a href="/contact">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyrights">
                    <div className="container">
                        <p>&copy; Copyrights SanTech. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    );
}

export default Footer;