import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Contact from './pages/Contact'
import Book from './pages/Book'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<Book />} />
            </Routes>
        </>
    );
}

export default App;