import React from "react";
import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-destructutacion arr", () => {
  test("debe de retornar un arreglo con un string y un numero", () => {
    //   const arr = retornaArreglo() // ['ABC', 123]
    const [letras, numero] = retornaArreglo(); // ['ABC', 123]

    //   expect(arr).toEqual(['ABC', 123])
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
