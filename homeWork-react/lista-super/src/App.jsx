import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const productsList = [
  ]

  const [products, setProducts] = useState([])
  const [title, setTitle] = useState("")

  useEffect(()=> {
    setProducts(productsList)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      title,
      id: products.length
    }
    setProducts([...products, newProduct])
    setTitle("")
  }

  function deleteProduct(productId) {
    setProducts(products.filter(product => product.id !== productId))
  }

  return (
    <main className='bg-blue-700 rounded-xl py-10 px-26'>
      <h2 className='text-white font-bold text-4xl'>Lista del Super</h2>
      <form onSubmit={handleSubmit} className='flex gap-2 mt-8'>
        <input type="text" placeholder='Producto...' onChange={(e) => setTitle(e.target.value)} value={title} autoFocus className='bg-white text-gray-500 px-6 py-3 outline-0 border-0 rounded-lg placeholder:text-gry-300'/>
        <button className='bg-blue-400 py-3 px-8 rounded-lg hover:bg-blue-500 cursor-pointer font-medium text-lg'>Agregar</button>
      </form>
      <section className='flex flex-col gap-4 mt-4'>
        {products.map((product) => (
          <article key={product.id} id={product.id} className='flex justify-between items-center px-8 py-4 rounded-lg bg-white'>
            <p className='text-xl font-medium text-black'>{product.title}</p>
            <span className='text-red-600 font-bold  cursor-pointer' onClick={() => deleteProduct(product.id)}>X</span>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
