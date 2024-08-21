import { useState } from "react";
import "./App.css";


function App() {
  let [counter , setCounter] = useState(15)

  const addValue = () =>{
    console.log("value add" , counter);
    
    counter = counter + 1
    setCounter(counter)
    if(counter === 25){
      alert("kaise ho beta")
    }
    
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
