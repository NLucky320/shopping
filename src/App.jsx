
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart]=useState([])
  
  useEffect(() => {
    fetch('../public/fakeData.json')
      .then(res => res.json())
    .then(data=>setProducts(data))
},[])
  // console.log(products)
  
  const handleCart = product => {
    const isAdded = cart.find(item => item.id == product.id);
    // console.log(isAdded)
    if (!isAdded) {
      setCart([...cart, product])
    }
    else{
      alert('already added')
    }
}

  const handleDelete = id => {
    // console.log(id)
    const newCart = cart.filter(item => item.id != id);
    //   console.log(newCart)
    setCart(newCart)
  }
  
  
  return (
    <>
      
        
      <div className='max-w-[1170px] mx-auto items-center p-4'>
       <Header></Header>

        <div className='md:flex justify-between gap-2'>
          <div className='md:w-2/3'>
             {
              products.map(product => <Products key={product.id} product={ product} handleCart={handleCart}></Products>)
            }
      </div>
          <div className='md:w-1/3'>
                  <div className='bg-base-200 rounded-lg shadow-sm p-4'>
            <div className='w-full'>
                <h1 className='text-4xl font-semibold text-center p-4'>This is cart</h1>
            <div className='flex justify-between gap-2'>
              <h3>Name</h3>
              <h3>Price</h3>
              </div>
              <div>
                {
                  cart.map((item,index) => (
                    <div key={index} className='flex justify-between gap-2 space-y-4 items-center text-center'>
                      <p>{ index+1}</p>
                      <h3>{item.title}</h3>
                      <h3>{ item.price}</h3>
                      <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                  ))}
              </div>
          </div>
          </div>
       </div>
   
        </div>
      </div>
      
    </>
  )
}

export default App
