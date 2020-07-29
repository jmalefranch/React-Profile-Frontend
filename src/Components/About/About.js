import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './About.css';

function About(){
    const [information, setinformation] = useState({});
    useEffect (() => {
        axios.get('https://reactportfolio-backend.herokuapp.com/About')
        .then(
            res => setinformation(res.data[0])
        )
    })
    return(
        <div className="About">
            <div className="div-foto">
                <img className="foto-perfil" alt="FotoPerfil" src={information.photo}></img>
            </div>
            <div className="Descripcion">
                <h1 alt="Nombre">{information.name}</h1>
                <h2 alt="Descripcion">{information.profession}</h2>
                <p alt="about me">{information.about_me}</p>
                <ul className="skills"></ul>
            </div>

        </div>
    )
};

 export default About;