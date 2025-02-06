/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../componentes/Inicio";
import Portafolio from '../componentes/Portafolio';
import Servicios from '../componentes/Servicios';
import CV from '../componentes/CV';
import Contacto from '../componentes/Contacto';
import Header_nav from '../componentes/layout/Header_nav';
import Footer from '../componentes/layout/Footer';
import Particulas_fondo from '../componentes/Particulas_fondo';
import Particulas2 from '../componentes/Particulas2';
import { useState } from 'react';


const rutas = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color, setColor] = useState("primary:#000000"); // Estado en el padre

    return (

        <BrowserRouter className='cuerpo'>

            <Particulas_fondo />

            {/*HEADER Y NAVEGACION*/}
            <Header_nav />

            {/*CONTENIDO CENTRAL*/}
            <section className='content'>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/portafolio" element={<Portafolio />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<h1 className='heading'> ERROR 404</h1>} />
                </Routes>
            </section>

            {/*FOOTER*/}
            <Footer />

        </BrowserRouter>

    )
}

export default rutas
