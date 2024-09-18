import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const subValue = () =>{
    counter = counter - 1
    setCounter(counter)
  }

  if(counter === 0){
    counter = 15
  }

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subValue}>Decrease Value</button>

    </>
  )
}

export default App;