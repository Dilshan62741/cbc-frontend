import { useState } from 'react'
import Header from './components/header'
import ProductCard from './components/productCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <ProductCard name = "testing 01" description = "Good One" price = "500"/>
    <ProductCard name = "testing 02" description = "Good Two" price = "1000"/>
    <ProductCard name = "testing 013" description = "Good Three" price = "1500"/>
    </>
  )
}

export default App
