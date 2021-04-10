import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../components/CounterApp";

describe("Pruebas en el archivo counter", () => {
  // test('debe de mostrar el mensaje "Hola soy goku" ', () => {
  //     // const saludo = 'Hola soy goku';
  //     // const wrapper = render(<PrimeraApp saludo={saludo}/>) // componente de react, producto renderizado del componente de react
  //     // wrapper.getByText(saludo)
  //     // // const {getByText} = render(<PrimeraApp saludo={saludo} />) // componente de react, producto renderizado del componente de react
  //     // // const {getByText} = render(<PrimeraApp saludo={saludo} />) // componente de react, producto renderizado del componente de react
  //     // // expect( getByText(saludo)).toBeInTheDocument();
  //     // expect( wrapper.getByText(saludo)).toBeInTheDocument();
  // });

  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    // console.log('before each');
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostrar <CounterApp /> correctamente con sus valores por defecto con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100 ", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const textParrafo = wrapper.find("#counter").text().trim();
    expect(textParrafo).toBe(String(value));
  });

  test("debe de incrementar con el boton +1", () => {
    const btn1 = wrapper.find("button").at(0).simulate("click"); // rescartar las pociciones de etiquetas html dependiendo del indice
    // console.log({btn1: btn1.html()});
    const countertext = wrapper.find("#counter").text().trim();
    expect(countertext).toBe("11");
  });

  test("debe de devcrementar con el boton -1", () => {
    // const wrapper = shallow(<CounterApp />)
    const btn3 = wrapper.find("button").at(2).simulate("click"); // rescartar las pociciones de etiquetas html dependiendo del indice
    // console.log({btn3: btn3.html()});
    const countertext = wrapper.find("#counter").text().trim();
    expect(countertext).toBe("9");
  });

  test("debe de colocolar el valor por defecto con el boton reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    const btn2 = wrapper.find("button").at(1).simulate("click"); // rescartar las pociciones de etiquetas html dependiendo del indice
    const countertext = wrapper.find("#counter").text().trim();
    // console.log({countertext});
    expect(countertext).toBe("105");
  });
});
