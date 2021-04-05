import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }: any) => {
  // hooks
  const [counter, setCounter] = useState(value); // devuelve un arreglo []
  console.log({ counter, setCounter });

  // add
  const add = () => {
    // setCounter(counter + 1)
    setCounter(counter + 1);
    // setCounter((c) => {
    //   // console.log({c});
    //   // c es el valor anterior del conuter
    //   return c + 1;
    // });
    // console.log(e)
  };

  const less = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(value);
  };

  return (
    <>
      <p>Counter App </p>
      <p> {counter} </p>
      <button onClick={add}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={less}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number, // si no se coloca nada es opcional
};

export default CounterApp;
// rafcp - crear el componente
