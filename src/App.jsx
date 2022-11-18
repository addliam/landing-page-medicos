import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import SectionAgendaTuEstudio from './components/SectionAgendaTuEstudio'
import SectionInformacionSobreElEstudio from './components/SectionInformacionSobreElEstudio'
import SectionOpiniones from './components/SectionOpiniones'
import SectionAgendaTACTorax from './components/SectionAgendaTACTorax'

const App = () => {
  return (
    <main className='bg-[#F0F4F7]'>
      <Navbar />
      <HeroBanner />
      <SectionAgendaTuEstudio />
      <SectionInformacionSobreElEstudio />
      <SectionOpiniones />
      <SectionAgendaTACTorax />
    </main>
  )
}

export default App