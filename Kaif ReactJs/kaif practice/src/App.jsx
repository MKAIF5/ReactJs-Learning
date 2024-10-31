import { useState } from 'react'
import './App.css'


function App() {

  // const products = [
  //   {
  //     title: 'Samsung',
  //     price: 25000,
  //     Id: 1,
  //   },
  //   {
  //     title: 'iphone 10',
  //     price: 50000,
  //     Id: 2,
  //   },
  //   {
  //     title: 'oppo',
  //     price: 30000,
  //     Id: 3,
  //   },
  // ]



  const foods = [
    { title: "Mango", Id: 1, isFruit: true },
    { title: "Apple", Id: 2, isFruit: true },
    { title: "Potato", Id: 3, isFruit: false },
    { title: "Orange", Id: 4, isFruit: true },
    { title: "Tomato", Id: 5, isFruit: false },
    { title: "Cabbage", Id: 6, isFruit: false },
    { title: "Carrot", Id: 7, isFruit: false },
    { title: "Banana", Id: 8, isFruit: true },
    { title: "Strawberry", Id: 9, isFruit: true },
    { title: "Onion", Id: 10, isFruit: false },
  ]

  const [name, setName] = useState(true)

  const btnClick = () => {
    setName(alert("kaif"))
  }

  return (
    <>

      <ul>
        {foods.map((items, index) => {
          return <li key={items.Id}
            style={{ color: items.isFruit ? "green" : "red" }}
          >{index + 1} : {items.title}</li>
        })}
      </ul>

      <button onClick={btnClick}>Hello {name}</button>



      {/* <ul>
        {products.map((prod , i) => [
          <li>{i + 1}: {prod.title} : {prod.price}</li>
        ])}
      </ul> */}
    </>
  )
}

export default App
