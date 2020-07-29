import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setprojects] = useState({});
  useEffect(() => {
    axios
      .get("https://reactportfolio-backend.herokuapp.com/Portfolio")
      .then((res) => setprojects(res.data));
  }, [setprojects]);

  return (
    <>
      <div className="mega-card-portfolio">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <div className="individual-card">
              <h1>{project.name}</h1>
              <div className="div-fotoproyecto">
                <img
                  href={project.image}
                  classname="imagenproyecto"
                  alt="imagen-proyecto"
                ></img>
              </div>
              <p classname="decripcion">{project.description}</p>
              <a className="boton-vermas" href={project.link}>
                Ver proyecto
              </a>
            </div>
          ))}
      </div>
    </>
  );
}

export default Portfolio;
