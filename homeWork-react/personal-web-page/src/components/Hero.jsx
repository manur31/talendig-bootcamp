import img from '../assets/img/hero-photo.jpg'
import LinksRedes from './LinksRedes'

function Hero() {
  return (
    <section className='flex items-center justify-between mt-40 px-20'>
        <article className='flex flex-col gap-3'>
            <h2 className='text-5xl font-bold uppercase'>Manuel <span className='text-8xl text-zinc-500 -m-1.5'>Rosario</span></h2>
            <p className='font-mono text-3xl tracking-wider'>Frontend Developer</p>
            <LinksRedes/>
        </article>
        <article>
            <img src={img} alt="Imagen del setup de @manur31" className='w-xl h-85'/>
        </article>
    </section>
  )
}

export default Hero