import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import SectionAgendaTuEstudio from './components/SectionAgendaTuEstudio'

const App = () => {
  return (
    <main className='bg-[#F0F4F7]'>
      <Navbar />
      <HeroBanner />
      <SectionAgendaTuEstudio />
    </main>
  )
}

export default App