import programming from '../assets/img/programing-photo.jpg'
import music from '../assets/img/music-photo.jpg'
import gym from '../assets/img/gym-photo.jpg'

function Hobbies() {

    const hobbies = [
        {
            id: '01',
            title: 'Programar',
            img: programming
        },
        {
            id: '02',
            title: 'Entrenar',
            img: gym
        },
        {
            id: '03',
            title: 'Escuchar musica',
            img: music
        }
    ]

  return (
    <section className='flex flex-col items-center justify-center gap-16 mt-40 px-20'>
        <h3 className='text-4xl text-zinc-500 font-bold'>Hobbies</h3>
        <article className='flex items-center justify-center gap-20'>
            {hobbies.map(hobby => (
                <article key={hobby.id} className='w-75 h-88 bg-zinc-500 p-5 rounded-2xl  hover:rotate-6 hover:scale-105 transition-all cursor-pointer'>
                    <img src={hobby.img} alt={`${hobby.title} imagen`} className='rounded-lg w-full h-[85%] object-cover' />
                    <p className='mt-3 text-2xl font-bold'>{hobby.title}</p>
                </article>
            ))}
        </article>
    </section>
  )
}

export default Hobbies