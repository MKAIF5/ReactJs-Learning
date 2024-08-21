import { useState } from "react";
import "./App.css";


function App() {
  let [counter , setCounter] = useState(15)

  const addValue = () =>{
    counter = counter + 1
    setCounter(counter)
    console.log("value add" , counter);
    
  }
  
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
