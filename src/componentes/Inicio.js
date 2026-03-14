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
        <h1 className="nombre">Soy Alejandro Lora Garza</h1>
        <p className="p_inicio">
          Estoy a punto de graduarme de la carrera de licenciado en multimedia y animación digital y quiero ganar experiencia en proyectos web o similares.
        </p>
      </div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
        >
          <Link id="contact_link" to="/contacto">Contáctame</Link>
        </motion.div>
      </motion.h2>
    </div>
  );
};

export default Inicio;
