import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
