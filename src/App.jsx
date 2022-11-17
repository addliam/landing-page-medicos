import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import SectionAgendaTuEstudio from './components/SectionAgendaTuEstudio'
import SectionInformacionSobreElEstudio from './components/SectionInformacionSobreElEstudio'

const App = () => {
  return (
    <main className='bg-[#F0F4F7]'>
      <Navbar />
      <HeroBanner />
      <SectionAgendaTuEstudio />
      <SectionInformacionSobreElEstudio />
    </main>
  )
}

export default App