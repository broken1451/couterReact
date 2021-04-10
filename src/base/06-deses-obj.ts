import React from "react";
// Desestructuración
// Asignación Desestructurante
const persona: any = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre, } = persona;
 

// console.log( nombre );
// console.log( edad );
// console.log( clave );

export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
// export const usContext = (persona,  rango = 'Capitán') => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );

// console.log(nombreClave, anios);
// console.log( lat, lng );


