import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState('');


  const handleButtonClick = (val) => {
    setValue(value + val);
  }
  const handleCalculate = () => {
    setValue(eval(value))
  }

  const handleDeleteAll = () => {
    setValue("")
  }

  const handleDelete = () => {
    setValue(value.slice(0, -1))
  }

  return (
    <>
      <div className='bg-white w-96 p-4 mx-auto my-8 rounded-xl'>
        <h1 className='text-center text-2xl font-bold'>CALCULATOR</h1>
        <div className='flex justify-center my-5'>
          <input
            value={value}
            type="text"
            className='bg-gray-800 rounded-lg h-24 w-80 text-white p-1 text-right text-3xl font-semibold outline-none'
            readOnly
          />
        </div>
        <br />
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={handleDeleteAll}>AC</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={handleDelete}>DE</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick(".")}>.</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("7")}>7</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("8")} >8</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("9")} >9</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold'onClick={() => handleButtonClick("*")} >*</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black 
          rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("4")} >4</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("5")} >5</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("6")} >6</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("+")} >+</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("1")} >1</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("2")} >2</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("3")} >3</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("-")} >-</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("00")} >00</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' onClick={() => handleButtonClick("0")} >0</button>
          <button className='p-4 bg-gray-800 border border-black text-white
           rounded-lg w-40 text-xl font-semibold' onClick={handleCalculate}>=</button>
        </div>
      </div>

    </>
  )
}
export default App;