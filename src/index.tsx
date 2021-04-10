import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./components/PrimeraApp";
import './index.css'
import CounterApp from './components/CounterApp';


// const saludo = <h1>Hola mundo desde reactjs</h1>;
const divRoot = document.querySelector("#root");

// ReactDOM.render(saludo, divRoot);
// ReactDOM.render(<PrimeraApp saludo='hola soy goku'/>, divRoot); // props
// ReactDOM.render(<PrimeraApp saludo='hola soy goku' />, divRoot);
// ReactDOM.render(<CounterApp value={0}/>, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
// ReactDOM.render(<PrimeraApp saludo='Hola soy goku'/>, divRoot);

