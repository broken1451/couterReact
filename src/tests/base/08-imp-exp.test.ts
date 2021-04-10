import React from "react";
import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const hero = heroes.find((h) => h.id == id);

    expect(heroe).toEqual(hero);
  });

  test("debe de retornar un undefine si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("debe de retornar arreglo de heroe de DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    const hero = heroes.filter((h) => h.owner === owner);
    expect(heroe).toEqual(hero);
  });

  test("debe de retornar arreglo de heroe de Marvel lenght 2", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    const hero = heroes.filter((h) => h.owner === owner);
    expect(heroe.length).toBe(2);
  });

  test("debe de retornar arreglo de heroe lenght 0 si no existe el owner", () => {
    const owner = "Marvel2";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toBe(0);
  });
});
