import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Kaif from "./kaif.jsx";

function App() {
  let myObj = {
    name: "kaif",
    age: 15,
    isMarried: false,
  };

  let myArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-600 text-white p-4 rounded-lg">Tailwand Css </h1>
      <Kaif arr={myArr} />
      <Kaif arr={myArr} />
      <Kaif arr={myArr} />
    </>
  );
}

export default App;