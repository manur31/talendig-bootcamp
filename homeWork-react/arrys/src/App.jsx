import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'

function App() {

  let miArray = [10, 20, 30, 40, 50]

  const [array, setArray] = useState(miArray)

  function agregarInicio() {
    let dato = [prompt('agregar un numero...')]
    const agregar = [...dato, array]
    setArray(agregar)
  }

  function quitarInicio() {
    const agregar = array.slice(1)
    setArray(agregar)
  }
  
  function agregarFinal() {
    let dato = prompt('agregar un numero...')
    const agregar = [...array, dato]
    setArray(agregar)
  }
  
  function quitarFinal() {
    const agregar = array.slice(0, -1)
    setArray(agregar)
  }

  function revertir() {
    const agregar = [...array].reverse()
    setArray(agregar)
  }

  return (
    <main className='bg-violet-600 w-xl flex flex-col items-center p-7 rounded-3xl shadow-[6px 6px 0 rgb(32, 33, 109);] text-blue-950 font-bold text-wrap'>
      <h1 className='font-stretch-50%'>Aumentar o Disminuir Array</h1>
      <section>
        <h3 className='text-2xl font-bold mt-3'>Agregar</h3>
        <article className='flex gap-2 justify-center mt-2'>
          <Button handle={agregarInicio}>Al inicio</Button>
          <Button handle={agregarFinal}>Al final</Button>
        </article>
      </section>
      <section>
        <h3 className='text-2xl font-bold mt-3'>Quitar</h3>
        <article className='flex gap-2 justify-center mt-2'>
          <Button handle={quitarInicio}>Desde inicio</Button>
          <Button handle={quitarFinal}>Desde final</Button>
        </article>
      </section>
      <section>
        <h3 className='text-2xl font-bold mt-3'>Del Reves</h3>
        <article className='flex gap-2 justify-center mt-2'>
          <Button handle={revertir}>Revertir</Button>
        </article>
      </section>
      <section className='mt-6 p-2 rounded-xl bg-[#20216d27] w-[30%]'>{array.join(', ')}</section>
    </main>
  )
}

export default App
