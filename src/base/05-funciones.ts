import React from "react";
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

// const saludar2 = ( nombre: any ) => {
//     return `Hola, ${ nombre }`;
// }

export const saludar3 = ( nombre: any ) => `Hola, ${ nombre }`;
export const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

// console.log( saludar2('Vegeta') );
// console.log( saludar3('Goku') );
// console.log( saludar4() );


export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


// const user = getUser();
// console.log(user);

// Tarea
export const getUsuarioActivo = ( nombre: any ) =>({
    uid: 'ABC567',
    username: nombre
})

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );



