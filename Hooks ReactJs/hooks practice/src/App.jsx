import { useState } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {


  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {


    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "1234567890"
    }

    if (charAllowed) {
      str += "!@#$%^&*()-_+:;/<>{}[]"
    }


    for (let i = 1; i <= str.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg mt-8 px-3 py-3 text-orange-500 bg-slate-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              value={length}
              min={8}
              max={50}
              className="cursor-pointer"
              type="range"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;