import { useState } from "react";
import "./App.css";


function App() {
  let [counter , setCounter] = useState(15)

  const addValue = () =>{
    console.log("value add" , counter);
     
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  const removeValue = () =>{
    console.log("value add" , counter);
    
    counter = counter - 1
    setCounter(counter)
  }
  
  return (
    <>
      <h1>Create Counter</h1>
      <p> Counter Value : {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
