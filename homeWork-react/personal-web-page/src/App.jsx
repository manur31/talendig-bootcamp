import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Galery from './components/Galery'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'

function App() {

  return (
    <main className='px-70'>
      <Header/>
      <Hero id={'home'}></Hero>
      <About id={'about'}/>
      <Galery/>
      <Hobbies id={'hobbies'}/>
      <Footer/>
    </main>
  )
}

export default App
