import React from 'react';

function Newsletter(props) {
    return (
        <section id="newsletter" class="newsletter text-center">
            <div class="overlay padd-section">
                <div class="container" data-aos="zoom-in">

                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-6">
                        <form class="d-flex" method="POST" action="#">
                            <input type="email" class="form-control " placeholder="Email Adress" name="email" />
                            <button type="submit" class="btn btn-default"><i class="bi bi-location-arrow"></i>Subscribe</button>
                        </form>
                        </div>
                    </div>

                    <ul class="list-unstyled">
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default Newsletter;