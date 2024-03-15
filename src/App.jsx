
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('../public/fakeData.json')
      .then(res => res.json())
    .then(data=>setProducts(data))
},[])
console.log(products)
  
  return (
    <>
      
        
      <div className='max-w-[1170px] mx-auto items-center p-4'>
       <Header></Header>

        <div className='flex justify-around p-4'>
          <div>
             {
              products.map(product => <Products key={product.id} product={ product}></Products>)
            }
      </div>
       
          <div className='bg-base-200 rounded-lg shadow-sm w-1/3'>
            <h1 className='text-4xl font-semibold text-center p-4'>This is cart</h1>
          </div>
        </div>


      </div>
      
    </>
  )
}

export default App
