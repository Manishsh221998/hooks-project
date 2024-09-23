import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import {Button} from 'react-bootstrap'

//useMemo is one of the built-in hooks provided by React. It's used for memoization, which is an optimization technique to improve the performance of React components. Memoization involves caching the results of complex logic so that they can be reused instead of being reimplemented on every render.

const UseMemo = () => {
  let [counterOne, setcounterOne] = useState(0);
  let [counterTwo, setcounterTwo] = useState(0);
  const changeCounterOne = () => {
    setcounterOne(counterOne + 1);
  };
  const changeCounterTwo = () => {
    setcounterTwo(counterTwo + 1);
  };
let isEven=useMemo(()=>{
    let i=0
    while(i<2000000000) i++
    return counterOne%2===0
},[counterOne])
  return (
    <div className="m-5" >
      <h2 style={{ color: "red" }}>UseMemo</h2><hr />
      <Button variant="outline-dark" onClick={changeCounterOne} className="m-2 fs-4">
        Incremnet {counterOne}
      </Button>
      <span className="text-danger font-bold fs-4">{isEven?"Even":"Odd"}</span>
      <br />
      <Button variant="outline-dark" onClick={changeCounterTwo} className="m-2 fs-4">
      Incremnet {counterTwo}
      </Button>
    </div>
  );
};

export default UseMemo;
