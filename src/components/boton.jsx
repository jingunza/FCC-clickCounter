import React from 'react';
import '../hojas-de-estilo/boton.css';

const Boton = ({texto, esBotonClic, manejarClic }) => {
  return (
    <div className="col-2 d-grid gap-2 mt-4">
      <button 
        onClick ={manejarClic} className={esBotonClic ? "boton1 btn btn-primary btn-lg btn-outline-light" : "boton1 btn btn-secondary btn-lg btn-outline-light" }
        >{texto}
      </button>
    </div>
  )
};

export default Boton;