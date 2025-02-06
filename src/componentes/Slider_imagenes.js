import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
/*import BDM1 from '../componentes/imagenes/BDM1.jpg'
import BDM2 from '../componentes/imagenes/BDM2.jpg'
import BDM3 from '../componentes/imagenes/BDM3.jpg'
import AAVD1 from '../componentes/imagenes/AAVD1.jpg'
import AAVD2 from '../componentes/imagenes/AAVD1.jpg'
import AAVD3 from '../componentes/imagenes/AAVD1.jpg'
import AAVD4 from '../componentes/imagenes/AAVD1.jpg'
import AAVD5 from '../componentes/imagenes/AAVD1.jpg'
import AAVD6 from '../componentes/imagenes/AAVD1.jpg'
import AAVD7 from '../componentes/imagenes/AAVD1.jpg'

const imagenesBDM = [BDM1, BDM2, BDM3];
const imagenesAAVD = [AAVD1, AAVD2, AAVD3, AAVD4, AAVD5, AAVD6, AAVD7];*/

const Slider_imagenes = ({ imagenurl = [] }) => {
    
    const [indice, setIndice] = useState(0);

    const siguienteImagen = () => {
        setIndice((prev) => (prev + 1) % imagenurl.length);
    };

    const anteriorImagen = () => {
        setIndice((prev) => (prev === 0 ? imagenurl.length - 1 : prev - 1));
    };

    useEffect(() => {
        setIndice(0);
    }, [imagenurl]);

    return (
        <div className='image_slider'>

             {imagenurl.length > 0 ? (
                <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden",}}>
                    {imagenurl.map( url => ( <img key={url} src={url} alt="Imagen del proyecto" className='image' style={{translate: `${-100 * indice}%`}}/>))}
                </div>
            ) : (
                <p>No hay imágenes disponibles</p>
            )}
            <button className='image_slider_btn' style={{left:"0"}} onClick={anteriorImagen}>
            <FaArrowLeft />
            </button>
            <button className='image_slider_btn' style={{right:"0"}} onClick={siguienteImagen}>
            <FaArrowRight />
            </button>

        </div>
    )
}

export default Slider_imagenes
