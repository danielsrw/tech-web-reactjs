import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header_area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand logo_h" to='/'>
                        <img src="image/Logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rooms">Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/book">
                                    <button className="btn theme_btn button_hover">Book Room</button>
                                </Link>
                            </li>
                        </ul>
                    </div> 
                </nav>
            </div>
        </header>
    );
}

export default Header;