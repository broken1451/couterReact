import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
// import '@testing-library/jest-dom/extend-expect';
import PrimeraApp from "../components/PrimeraApp";


describe('Pruebas en el archivo Primeraapp ', () => {
    // test('debe de mostrar el mensaje "Hola soy goku" ', () => {
    //     // const saludo = 'Hola soy goku';
    //     // const wrapper = render(<PrimeraApp saludo={saludo}/>) // componente de react, producto renderizado del componente de react
    //     // wrapper.getByText(saludo)
    //     // // const {getByText} = render(<PrimeraApp saludo={saludo} />) // componente de react, producto renderizado del componente de react
    //     // // const {getByText} = render(<PrimeraApp saludo={saludo} />) // componente de react, producto renderizado del componente de react
    //     // // expect( getByText(saludo)).toBeInTheDocument(); 
    //     // expect( wrapper.getByText(saludo)).toBeInTheDocument(); 
    // });

    test('debe de mostrar <PrimerApp /> correctamente" ', () => {
        const saludo = 'Hola soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar el subtitulos enviado por props ', () => {
        const saludo = 'Hola soy goku';
        const subtitulo = 'subtitlo en reactjs Hola soy el subtitulo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />)
        const textParrafo = wrapper.find('#p').text()
        expect(textParrafo).toBe(subtitulo) 
    });
});
