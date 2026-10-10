import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importación de Páginas
import Home from './pages/Home';
import Unit from './pages/UNITElectronics';
//import Thesis from '../pages/Thesis';
//import Research from '../pages/Research';
//import Education from '../pages/Education';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit" element={<Unit />} />
        </Routes>
    );
};

export default AppRouter;

{/*
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/research" element={<Research />} />
            <Route path="/education" element={<Education />} />
*/ }