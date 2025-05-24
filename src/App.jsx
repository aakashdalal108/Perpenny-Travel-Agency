import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Destinantion from './components/Destination'
import Choose from './components/Choose'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Hero />
      <Destinantion />
      <Choose />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
