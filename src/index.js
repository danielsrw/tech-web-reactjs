import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
// About
import Team from './pages/about/Team';
import Social from './pages/about/Social';
import Values from './pages/about/Values';
import Gallery from './pages/about/Gallery';
import Overview from './pages/about/Overview';
import Cartificates from './pages/about/Certificates';

// Services
import Tech from './pages/services/Tech';
import System from './pages/services/System';
import Graphic from './pages/services/Graphic';
import Software from './pages/services/Software';
import Artificial from './pages/services/Artificial';
import Electronics from './pages/services/Electronics';

// Products
import Core from './pages/projects/Core';
import Delivered from './pages/projects/Delivered';

import Apply from './pages/Apply';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />

            {/* About ys */}
            <Route path="about/overview" element={<Overview />} />
            <Route path="about/gallery" element={<Gallery />} />
            <Route path="about/values" element={<Values />} />
            <Route path="about/social" element={<Social />} />
            <Route path="about/team" element={<Team />} />
            <Route path="about/certificates" element={<Cartificates />} />

            {/* Services */}
            <Route path="services/software-dev" element={<Software />} />
            <Route path="services/ai" element={<Artificial />} />
            <Route path="services/electronic" element={<Electronics />} />
            <Route path="services/graphic-design" element={<Graphic />} />
            <Route path="services/system-networking" element={<System />} />
            <Route path="services/tech-hub" element={<Tech />} />

            {/* Projects */}
            <Route path="projects/core" element={<Core />} />
            <Route path="projects/delivered" element={<Delivered />} />

            <Route path="contact" element={<Contact />} />
            <Route path="apply" element={<Apply />} />
            <Route path ="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
