import React from 'react';

function Hero(props) {
    return (
        <section id="hero" className='bg-primary'>
            <div class="hero-container" data-aos="fade-in">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6 mt-5">
                                    <div className="container">
                                        <div className="card">
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus, impedit reprehenderit temporibus illo voluptatem, fugit eius veritatis velit quam officia pariatur, non nam ullam facilis dolores cumque sed amet?
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary">More About us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="assets/img/hero/1.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="20000">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6 mt-5">
                                    <div className="container">
                                        <div className="card">
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus, impedit reprehenderit temporibus illo voluptatem, fugit eius veritatis velit quam officia pariatur, non nam ullam facilis dolores cumque sed amet?
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary">More About us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="assets/img/hero/1.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-between">
                                <div className="col-md-6 mt-5">
                                    <div className="container">
                                        <div className="card">
                                            <div className="card-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus, impedit reprehenderit temporibus illo voluptatem, fugit eius veritatis velit quam officia pariatur, non nam ullam facilis dolores cumque sed amet?
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary">More About us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="assets/img/hero/1.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;