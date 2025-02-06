import React, { useState } from 'react'
// import { useEffect, useState } from 'react'
// import CVesp from '../componentes/CV-1-ESP.pdf';
// import CVeng from '../componentes/CV-1-ENG.pdf';
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPhpmyadmin } from "react-icons/si";

const CV = ({color}) => {

 
  return (
    <div className='cv'>
      <h2 className='exp'>Experiencia <lord-icon
        src="https://cdn.lordicon.com/lzgmgrnn.json"
        id="iconos_HT"
        trigger="loop"
        delay="1000"
        colors="primary:#000000" />
        <lord-icon
          src="https://cdn.lordicon.com/lzgmgrnn.json"
          id="iconos_HT_white"
          trigger="loop"
          delay="1000"
          colors="primary:#ffffff" />
      </h2>
      <ul className='lista-exp'>
        <li id='exp1'>
          <div className='info'>
            <h3>Desarrollador fullstack </h3>
            <h4>Facultad de Ciencias Físico Matemáticas -- Ciudad Universitaria, San Nicolás de los Garza, N.L.</h4>
            <p> Participé en un equipo de desarrollo de una
              página web donde se usó bootstrap, php, html,
              css, javascript y como base de datos SQL
              phpmyadmin. La página simulaba una sitio de
              cursos online donde usuarios podían gestionar
              sus cursos (comprar, vender, etc.).
            </p>
          </div>
          <div className='info_oculta'>
            <div className='periodo'>Ago 2024 - Nov 2024</div>
            <ul className='tecnologias'>
              <li><FaBootstrap className='img_card' /> </li>
              <li><SiPhpmyadmin className='img_card' /></li>
            </ul>
          </div>
        </li>
        <li id='exp2'>
          <div className='info'>
            <h3>Desarrollador fullstack </h3>
            <h4>Facultad de Ciencias Físico Matemáticas -- Ciudad Universitaria, San Nicolás de los Garza, N.L.</h4>
            <p>  Participé en un equipo de desarrollo de un
              software que simulaba una gestión de un hotel
              con reservaciones, amenidades, habitaciones,
              etc. Se usó c# y como base de datos SQL Server
              y Cassandra.
            </p>
          </div>
          <div className='info_oculta'>
            <div className='periodo'>Ago 2022 - Nov 2022</div>
            <ul className='tecnologias'>
              <li><SiMysql className='img_card' /></li>
              <li>C#</li>
              <li>NoSQL</li>
            </ul>
          </div>
        </li>
      </ul>

      <br />

      <h2 className='habt'>Habilidades Técnicas
        <lord-icon
          src="https://cdn.lordicon.com/zrtfxghu.json"
          id="iconos_HT"
          trigger="loop"
          delay="1000"
          colors="primary:#000000" />
        <lord-icon
          src="https://cdn.lordicon.com/zrtfxghu.json"
          id="iconos_HT_white"
          trigger="loop"
          delay="1000"
          colors="primary:#ffffff" />
      </h2>
      <ul className='lista-hab'>
        <li className='habilidad'><FaHtml5 /></li>
        <li className='habilidad'><IoLogoCss3 /></li>
        <li className='habilidad'><DiJavascript /></li>
        <li className='habilidad'><FaReact /></li>
        <li className='habilidad'><FaBootstrap /></li>
        <li className='habilidad'><SiPhp /></li>
        <li className='habilidad'><label id='csharp'>C#</label></li>
        <li className='habilidad'><SiMysql id='Mysql' /></li>
        <li className='habilidad'><label id='NoSQL'>NoSQL</label></li>
      </ul>

      <br />

      <div className='view'>
        <h2 className='edu_title'id='edu_title'>Educación y Cursos <lord-icon
          src="https://cdn.lordicon.com/lyrrgrsl.json"
          id="iconos_HT"
          trigger="loop"
          delay="1000"
          colors="primary:#000000" />
          <lord-icon
            src="https://cdn.lordicon.com/lyrrgrsl.json"
            id="iconos_HT_white"
            trigger="loop"
            delay="1000"
            colors="primary:#ffffff" />
        </h2>
        <ul className='lista-educacion-cursos'>
          <li>
            <div className='info'>
              <h3>Licenciatura en Multimedia y Animación Digital</h3>
              <h4>Facultad de Ciencias Físico Matemáticas -- Ciudad Universitaria, San Nicolás de los Garza, N.L.</h4>
            </div>
            <div className='info_oculta2'>
              <div className='periodo2'>2018 - 2024</div>
            </div>
          </li>
          <li id='curso_udemy'>
            <div className='info'>
              <h3>Desarrollo en React: Incluye ReactJS, Hooks, MERN, NodeJS, JWT+</h3>
              <h4>UDEMY</h4>
            </div>
            <div className='info_oculta2'>
              <div className='periodo2'>2025</div>
            </div>
          </li>
        </ul>
      </div>

      <div className='view'>
        <h2>Habilidades Blandas <lord-icon
          src="https://cdn.lordicon.com/nizfqlnk.json"
          id="iconos_HT"
          trigger="loop"
          delay="1000"
          colors="primary:#000000" />
          <lord-icon
            src="https://cdn.lordicon.com/nizfqlnk.json"
            id="iconos_HT_white"
            trigger="loop"
            delay="1000"
            colors="primary:#ffffff" />
        </h2>
        <ul className='lista-habb'>
          <li className='hab_text'>Comunicación Asertiva</li>
          <li className='hab_text' id='mucho_texto'>Gestión del tiempo y organización</li>
          <li className='hab_text'>Adaptación al cambio</li>
          <li className='hab_text'>Trabajo en equipo</li>
        </ul>
      </div>

      <div className='view'>
        <h2 className='idi'>Idiomas <lord-icon
          src="https://cdn.lordicon.com/fdxqrdfe.json"
          id="iconos_HT"
          trigger="loop"
          delay="1000"
          colors="primary:#000000" />
          <lord-icon
            src="https://cdn.lordicon.com/fdxqrdfe.json"
            id="iconos_HT_white"
            trigger="loop"
            delay="1000"
            colors="primary:#ffffff">
          </lord-icon>
        </h2>
        <ul className='lista-id'>
          <li>Español<label className='id_label'>Nativo</label></li>
          <li>Ingles<label className='id_label'> Avanzado</label></li>
        </ul>
      </div>

    </div>
  )
}

export default CV
