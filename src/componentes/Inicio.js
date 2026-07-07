import React from "react";
import { Link } from "react-router-dom";
import { useSplitTextAnimation } from "../funciones/SplitText";
import { useRef } from "react";
import { motion } from "framer-motion";

const Inicio = () => {

  const containerRef = useRef(null);

  useSplitTextAnimation(containerRef, ".nombre");
  useSplitTextAnimation(containerRef, ".p_inicio")

  return (
    <div className="cv">
      <div className="container" ref={containerRef}>
        <h1 className="nombre">Alejandro Lora Garza</h1>
        <p className="p_inicio">
          Soy licenciado en multimedia y animación dígital, con experiencia en desarrollo web front-end y back-end. Actualmente trabajo en Quanta Server y en proyectos independientes como freelancer.
        </p>
      </div>
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          className="contact_button"
        >
          <Link id="contact_link" to="/contacto">Contáctame</Link>
        </motion.div>
    </div>
  );
};

export default Inicio;
