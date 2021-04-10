import React from "react";


// test('Esta es mi primera prueba, debe de ser true ', () => {


// });

describe('Pruebas en el archivo demo.tets.ts', () => {
    it('deben de ser iguales los string ', () => {
    
        // 1 . inicializacion
        const mensaje = 'Hola mundo!'
    
        // 2 . estimulo
        const mensaje2 = `Hola mundo!` 
    
        // 3 . Observar el comportamiento
        expect(mensaje).toBe(mensaje2)
    
    });
})



