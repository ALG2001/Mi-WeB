import React, { useEffect, useRef,useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


const Header_nav = ({cambiarcolor}) => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [darkMode]);

    return (
        <header className='header'>
            <div className='logo'>
                <h3 id='ALG'> Alejandro Lora Garza</h3>
            </div>
            <div className='tema' id='settema'onClick={() => setDarkMode(!darkMode)}><IoSunnySharp id='sol'/></div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio">Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cv">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header_nav
