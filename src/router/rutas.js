/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../componentes/Inicio";
import Portafolio from '../componentes/Portafolio';

import CV from '../componentes/CV';
import Contacto from '../componentes/Contacto';
import Header_nav from '../componentes/layout/Header_nav';
import Footer from '../componentes/layout/Footer';




const rutas = ({ setfondo, icon_color, set_icon_color }) => {



    return (

        <BrowserRouter className='cuerpo'>



            {/*HEADER Y NAVEGACION*/}
            <Header_nav setfondo={setfondo} set_icon_color={set_icon_color} />

            {/*CONTENIDO CENTRAL*/}
            <section className='content'>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/portafolio" element={<Portafolio />} />
                    <Route path="/cv" element={<CV icon_color={icon_color}/>} />
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
