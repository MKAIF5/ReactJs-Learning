import { useState } from "react";
import "./App.css";

function App() {


  // const addValue = () => {
  //   counter = counter + 1
  //   setCounter(counter)
  // }

  // const subValue = () =>{
  //   counter = counter - 1
  //   setCounter(counter)
  // }

  // if(counter === 0){
  //   counter = 15
  // }

  return (
    <>
      <div className='bg-white w-96 p-4 mx-auto my-8 rounded-xl'>
        <h1 className='text-center text-2xl font-bold'>CALCULATOR</h1>
        <div className='flex justify-center my-5'>
          <input
            type="text"
            className='bg-gray-800 rounded-lg h-24 w-80 text-white p-1 text-right text-3xl font-semibold outline-none'
            readOnly
          />
        </div>
        <br />
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold'>AC</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold'>DE</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold'>.</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold'>/</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >7</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >8</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >9</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >*</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black 
          rounded-lg w-20 text-xl font-semibold' >4</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >5</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >6</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >+</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >1</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >2</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >3</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >-</button>
        </div>
        <div className='flex justify-center gap-1 mb-2'>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >00</button>
          <button className='p-4 bg-gray-400 border border-black text-black
           rounded-lg w-20 text-xl font-semibold' >0</button>
          <button className='p-4 bg-gray-800 border border-black text-white
           rounded-lg w-40 text-xl font-semibold'>=</button>
        </div>
      </div>

    </>
  )
}
export default App;