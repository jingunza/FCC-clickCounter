import React from 'react';
import '../hojas-de-estilo/contador.css';

const Contador = ({numClics}) => {
    return (
        <div className="contador text-center text-white col-2 mt-4">
          {numClics}
        </div>
    )
}

export default Contador;