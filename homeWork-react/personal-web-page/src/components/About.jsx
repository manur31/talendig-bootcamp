import img from '../assets/img/photo-about.jpg'

function About() {
  return (
    <section className='flex items-center justify-between mt-40 px-20'>
        <article className='w-[40%]'>
            <img src={img} alt="Foto de @manur31" className='w-[394px] h-[405px] object-cover rounded-tl-[70px] rounded-br-[70px] rounded-tr-none rounded-bl-none'/>
        </article>
        <article className='w-[60%] flex flex-col gap-4'>
            <h3 className='text-4xl text-zinc-500 font-bold'>Sobre mi</h3>
            <p  className='font-medium text-justify text-2xl'>Mi nombre es Manuel Rosario, nacido y criado en Santo Domingo. Me considero una persona autodidacta. Soy introvertido y sociable a la vez. Tengo unos 3 años empapándome de lo que es desarrollo web pero no es hasta este año que realmente aprendo a realizar mini proyectos por mi cuenta. Y mi plan es convertirme en un Frontend Developer.</p>
            <p className='text-2xl'>"Soy un libro todavia conociendome" - TYS</p>
        </article>
    </section>
  )
}

export default About