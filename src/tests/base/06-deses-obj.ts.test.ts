import React from "react";
import "@testing-library/jest-dom";
import { usContext } from "../../base/06-deses-obj";

describe("Pruebas en 06-destructuracion de obj", () => {
  test("usContext debe de retornar un objeto ", () => {
    const persona: any = {
      nombre: "Tony",
      edad: 45,
      clave: "Ironman",
    };

    const { edad, clave, nombre } = persona;
    const objTest = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const user = usContext(persona);
    expect(user).toEqual(objTest);
  });
});
