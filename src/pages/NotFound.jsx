import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function NotFound(props) {
    return (
        <div>
            <Header />

            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Not Found</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Not Found</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="screenshots" class="padd-section text-center">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title text-center">
                            <h2>404 | Page Not Found</h2>
                            <Link to='/'>
                                <button className="btn btn-primary">Go to Home</button>
                            </Link>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}

export default NotFound;