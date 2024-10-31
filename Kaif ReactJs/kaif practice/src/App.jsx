import './App.css'


function App() {

  const products = [
    {
      title: 'Samsung',
      price: 25000,
      Id: 1,
    },
    {
      title: 'iphone 10',
      price: 50000,
      Id: 2,
    },
    {
      title: 'oppo',
      price: 30000,
      Id: 3,
    },
  ]


  return (
    <>

      <ul>
        {products.map((prod , i) => [
          <li>{i + 1}: {prod.title} : {prod.price}</li>
        ])}
      </ul>
    </>
  )
}

export default App
