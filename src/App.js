import React, { useState } from 'react';
import './App.css';
import Logo from './components/logo.jsx';
import Contador from './components/contador.jsx';
import Boton from './components/boton.jsx';

function App() {
  const [numClics , setNumClics] = useState(0);

  const hacerClic  = () => {
    setNumClics(numClics+1);
  }

  const reiniciarContador  = () => {
    setNumClics(0);
  }

  return (
    <div className="container-fluid">
      <Logo />
      <div className="row d-flex justify-content-center">
        <Contador numClics={numClics} />
      </div>
      <div className="row d-flex justify-content-center">
        <Boton texto='Clic' esBotonClic={true} manejarClic={hacerClic} />
      </div>
      <div className="row d-flex justify-content-center">
        <Boton texto='Reiniciar' esBotonClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
};

export default App;