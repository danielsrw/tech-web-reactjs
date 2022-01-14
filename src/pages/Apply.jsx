import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Apply(props) {
    return (
        <div>
            <Header/>
            
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Appy</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Appy</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="screenshots" class="padd-section text-center">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title text-center">
                            <h2>Apply</h2>
                            <p class="separator">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, natus!</p>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}

export default Apply;