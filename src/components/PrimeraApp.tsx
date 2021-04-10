import React, { Fragment } from "react";
import PropTypes from 'prop-types';

// valor por defecto si no se envia las props
// const PrimeraApp = ({saludo = 'goku'}:any) => {
// const PrimeraApp = ({saludo, subtitulo='soy un subtitulo'}:any) => {
const PrimeraApp = ({saludo, subtitulo}:any) => {
  const saludo2 = "Hola mundo desde una variable en reactjs";
  //   const saludo = ['true',14];
  const persona = {
    nombre: "Persona",
    edad: 18,
  };

 //console.log({props});
//   if (!saludo) {
//       throw new Error("El saludo es obligatorio");
//   }

  return (
    //   <div>
    //       <h1>Hola mundo desde reactjs jejejeejjejej q tal sapo mmgvo negro </h1>
    //       <h1>Hola mundo desde reactjs jejejeejjejej q tal sapo mmgvo negro </h1>
    //   </div>

    //   <> <---- equivale a un Fragment
    //       <h1>Hola mundo desde reactjs jejejeejjejej q tal sapo mmgvo negro </h1>
    //       <h1>Hola mundo desde reactjs jejejeejjejej q tal sapo mmgvo negro </h1>
    //   </>
    <Fragment>
      <h1> {saludo2} jejejeejjejej q tal</h1>
      {/* booleando no lo impime en ----> {}, objetos da error */}
      {/* <pre> {JSON.stringify(persona)}</pre> */}
      <p>primera pagina en reactjs </p>
      <p>props en reactjs {saludo} </p>
      <p>hola soy {saludo} </p>
      <p id='p'>{subtitulo}</p>
    </Fragment>
  );
};

// definir el tipo de propiedades de este componente  las props
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number // si no se coloca nada es opcional
}

// valores por defecto
PrimeraApp.defaultProps ={
    subtitulo: 'soy un subtitulo'
}

export default PrimeraApp;
