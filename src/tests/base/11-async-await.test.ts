import React from "react";
import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async await y fetch', () => {

    test('Debe de retornar la url de la imagen ', async () => {
        const urlIMg:string = await getImagen();
        // console.log({urlIMg});
        if (!urlIMg.includes('https://')) {
            expect(urlIMg).toBe('No existe');
        } else {
            expect(urlIMg.includes('https://')).toBe(true);
        }
    });
});
