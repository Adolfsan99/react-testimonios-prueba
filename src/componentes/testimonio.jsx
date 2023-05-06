import React from 'react';

import '../hojas-de-estilos/testimonio.css';

function Testimonio(props) {
  return (


    <div className="contenedor-testimonio">

      <img 
      className="imagen-testimonio" 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt={(`foto de ${props.nombre}`)}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testmonio'>{props.testimonio}</p>
      </div>

    </div>


);
}

export default Testimonio;
