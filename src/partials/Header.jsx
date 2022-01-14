import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
            
                    <div id="logo">
                        <h1><Link to="/"><span>San</span>Tech</Link></h1>
                    </div>
                
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link" to="/">Home</Link></li> {" "}
                            <li className="dropdown"><Link to="/overview"><span>About Us</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="/about/overview">Overview</Link></li>
                                    <li><Link to="/about/gallery">Gallery</Link></li>
                                    <li><Link to="/about/values">Mission & Vision & Goals</Link></li>
                                    <li><Link to="/about/social">Social Impacts</Link></li>
                                    <li><Link to="/about/team">Team</Link></li>
                                    <li><Link to="/about/certificates">Certificates</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#"><span>Services</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="/services/software-dev">Software Developement</Link></li>
                                    <li><Link to="/services/ai">Artificial Intelligent</Link></li>
                                    <li><Link to="/services/electronic">Electronic Maintainance</Link></li>
                                    <li><Link to="/services/graphic-design">Graphic Design</Link></li>
                                    <li><Link to="/services/system-networking">Systems Networking</Link></li>
                                    <li><Link to="/services/tech-hub">Tech Hub</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#"><span>Products</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="/projects/core">Core Projects</Link></li>
                                    <li><Link to="/projects/delivered">Delivered Projects</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link" to="/contact">Contact</Link></li>
                            <Link to="/apply">
                                <button className="btn btn-primary">Apply</button>
                            </Link>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;