import React from "react";
import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getsaludo debe de retornar el nombre ", () => {
    const nombre = "Adrian";

    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });


  test("getsaludo debe de retornar 'Hola ' + nombre si no hay argumentos en nombre", () => {
    const nombre = "";
    const saludo = getSaludo();
    // expect(saludo + nombre).toBe("Hola " + 'Carlos');
    expect(saludo + nombre).toBe("Hola Carlos");
  });
});
