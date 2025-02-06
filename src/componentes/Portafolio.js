import React from 'react'
import { trabajos } from './data/Trabajos'
import { Link } from 'react-router-dom'
import Slider_imagenes from './Slider_imagenes'
import BDM1 from '../componentes/imagenes/BDM1.jpg'
import BDM2 from '../componentes/imagenes/BDM2.jpg'
import BDM3 from '../componentes/imagenes/BDM3.jpg'
import AAVD1 from '../componentes/imagenes/AAVD1.jpg'
import AAVD2 from '../componentes/imagenes/AAVD2.jpg'
import AAVD3 from '../componentes/imagenes/AAVD3.jpg'
import AAVD4 from '../componentes/imagenes/AAVD4.jpg'
import AAVD5 from '../componentes/imagenes/AAVD5.jpg'
import AAVD6 from '../componentes/imagenes/AAVD6.jpg'
import AAVD7 from '../componentes/imagenes/AAVD7.jpg'
import { SiPhp } from "react-icons/si";

const imagenesBDM = [BDM1, BDM2, BDM3];
const imagenesAAVD = [AAVD1, AAVD2, AAVD3, AAVD4, AAVD5, AAVD6, AAVD7];



const Portafolio = () => {

  return (
    <div className='cv'>
      {
        trabajos.map(trabajo => {
          return (
            <>
            <article key={trabajo.id} className='trabajo'>
              <div className='trabajo_infoprincipal' id='trabajo_infoprincipal'>
                <h2 id="trabajo_titulo"><Link>{trabajo.nombre}</Link></h2>
                <Slider_imagenes imagenurl={trabajo.id === "pia_bdm" ? imagenesBDM : trabajo.id === "pia_mad" ? imagenesAAVD : []} />
              </div>
              <div className='trabajo_infoextra' id='trabajo_infoextra'>
                <h3>{trabajo.tecnologías}</h3>
                <span>{trabajo.categorias}</span>
                <p>{trabajo.descripcion}</p>
              </div>
            </article>
            </>
          );
        })
      }

    </div>
  )
}

export default Portafolio
