import photo1 from '../assets/img/photo1.jpg'
import photo2 from '../assets/img/photo2.jpg'
import photo3 from '../assets/img/photo3.jpg'
import photo4 from '../assets/img/photo4.jpg'
import photo5 from '../assets/img/photo5.jpg'
import photo6 from '../assets/img/photo6.jpg'

const photos = [
    {
        id: '01',
        img: photo1
    },
    {
        id: '02',
        img: photo2
    },
    {
        id: '03',
        img: photo3
    },
    {
        id: '04',
        img: photo4
    },
    {
        id: '05',
        img: photo5
    },
    {
        id: '06',
        img: photo6
    },
]

function Galery() {
  return (
    <section className='flex items-center justify-center mt-40 px-20'>
        {photos.map(photo => (
            <article key={photo.id} className='w-[150px] h-[500px] mx-2 filter grayscale-80 rounded-2xl overflow-hidden transition-all ease-in-out duration-1000 [box-shadow:4px_4px_4px_#00000080] hover:w-[300px] hover:filter hover:grayscale-0'>
                <img src={photo.img} alt="Foto de @manur31" className='size-full object-cover cursor-pointer' />
            </article>
        ))}
    </section>
  )
}

export default Galery