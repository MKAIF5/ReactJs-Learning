import { useState } from "react";
import "./App.css";

let counter = 5;

function App() {
  return (
    <>
      <h1>Create Counter</h1>
      <p> Counter Value : {counter}</p>
      <button>Add Value</button>
      <button>Remove Value</button>
    </>
  );
}

export default App;
