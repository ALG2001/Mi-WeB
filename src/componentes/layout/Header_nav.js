import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Header_nav = ({ set_icon_color, setfondo }) => {

    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isDesktop = windowWidth > 1024;

    const navVariants = {
        closed: {
            x: "100%",   // se va hacia la derecha
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        open: (isDesktop) => ({
            x: isDesktop ? 0 : 40,        // aparece desde la izquierda
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" },
            zIndex: 1000
        })
    }

    const buttonVariants = {
        closed: { x: 0, y: 0, transition: { type: "spring", stiffness: 200, damping: 15, duration:0.3 } },
        open: { x: 20, y: -20, transition: { type: "spring", stiffness: 200, damping: 15, duration: 0.3 } }
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            set_icon_color("primary:#000000");
            setfondo(0x9a9a9a);
        } else {
            document.body.classList.remove("dark");
            set_icon_color("primary:#ffffff")
            setfondo(0xc0c0e);
        }
    }, [darkMode, setfondo]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <motion.header className='header'
            initial={{
                y: -50,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
        >
            <div className='logo'>
                <h3 id='ALG'> Alejandro Lora Garza</h3>
            </div>
            <div className='tema' id='settema' onClick={() => setDarkMode(!darkMode)}>  {darkMode ? <IoMoonSharp id="luna" /> : <IoSunnySharp id="sol" />}</div>

            <AnimatePresence>
                {(isOpen || isDesktop) && (
                    <motion.nav 
                        variants={navVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        custom={isDesktop}
                    >
                        <ul>
                            <li>
                                <NavLink to="/inicio" onClick={() => setisOpen(!isOpen)}>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portafolio" onClick={() => setisOpen(!isOpen)}>Portafolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cv" onClick={() => setisOpen(!isOpen)}>Curriculum</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacto" onClick={() => setisOpen(!isOpen)}>Contacto</NavLink>
                            </li>
                        </ul>
                    </motion.nav>
                )},
            </AnimatePresence>
            <motion.button
                className='hamburger'
                onClick={() => setisOpen(!isOpen)}
                variants={buttonVariants}
                animate={isOpen ? "open" : "closed"}
            >
                ☰
            </motion.button>
        </motion.header>
    )
}

export default Header_nav
