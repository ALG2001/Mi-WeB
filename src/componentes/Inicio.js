import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='cv'>
      <p className='p_inicio' id='p_inicio'>
        Soy Alejandro Lora Garza, estoy a punto de graduarme de la carrera de licenciado en multimedia y animación digital y quiero ganar experiencia en proyectos web o similares.
      </p>
      <h2><Link id='contact_link' to="/contacto">Contáctame</Link></h2>
      <section className='lasts-works'>
      </section>
    </div>
  )
}

export default Inicio
