import React from "react";
import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe("Pruebas en 09-promesas", () => {
  test("debe de retornar un heroe por id async", (done) => {
    // done es un parametro q le indica a jest cuando debe de terminar la prueba
    const id = 1;
    // console.log(heroes.length);
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);  
      done();
    });
  });

  test("debe de retornar un error si heroe por id async no existe", (done) => {
    // done es un parametro q le indica a jest cuando debe de terminar la prueba
    const id = 10;
    getHeroeByIdAsync(id).then((heroe) => {
        console.log('hereee');
    //   done();
    }).catch(err =>{
        expect(err).toBe('No se pudo encontrar el héroe')
        done();
    });
  });
});
