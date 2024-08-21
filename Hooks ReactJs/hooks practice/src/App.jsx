import { useState } from "react";
import "./App.css";

let counter = 5;
const addValue = () =>{
  counter = counter + 1
  console.log("value add" , counter);
  
}

function App() {
  return (
    <>
      <h1>Create Counter</h1>
      <p> Counter Value : {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <button>Remove Value</button>
    </>
  );
}

export default App;
