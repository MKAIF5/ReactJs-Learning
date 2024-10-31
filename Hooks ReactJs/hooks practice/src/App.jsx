import "./App.css";

function App() {



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
              className="cursor-pointer"
              type="range"
            />
            <label>Length: 8</label>
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