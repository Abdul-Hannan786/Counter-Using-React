"use client";
import React, { useState } from "react";



const Counter = () => {
  const [initCount, setInitCount] = useState(1);
  const [value, setValue] = useState(0);
  
  const changeHandler = (evevt: any) => {
    setInitCount(evevt.target.value);
  };

  const addHandler = () => {
    setValue(Number(initCount) + Number(value));
  };

  const minusHandler = () => {
    setValue(Number(value) - Number(initCount))
  }

  return (
    <>
      <input type="text" value={initCount} onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
      <button onClick={minusHandler}>Minus</button>
      {
       isNaN(value) === true?
      <h2 style={{color: "red"}}>Invalid input</h2> :
      <h2>{value}</h2>
      }
    </>
  );
};  

export default Counter;
