import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'

function LinksRedes() {

    const redes = [
        {
            id: 'l1',
            icon: FiInstagram,
            link: 'https://www.instagram.com/mnl.rosario/'
        },
        {
            id: 'l2',
            icon: FiGithub,
            link: 'https://github.com/manur31'
        },
        {
            id: 'l3',
            icon: FiYoutube,
            link: 'https://www.youtube.com/@Mr.October_0'
        },
        {
            id: 'l4',
            icon: FiLinkedin,
            link: 'https://www.linkedin.com/in/manuel-rosario-2486231b5/'
        },

    ]

  return (
    <section className='flex gap-2'>
        {redes.map(red => (
            <a href={red.link} key={red.id} className='text-2xl'><red.icon className='text-white'/></a> 
        ))}
    </section>
  )
}

export default LinksRedes