import React from 'react'
import RectanguloVerdeWave from '../assets/images/RectanguloVerdeWaves.svg'

const SectionAgendaTACTorax = () => {
  return (
    <section className="layout-y relative w-full">
        <div style={{backgroundImage: `url(${RectanguloVerdeWave})`}} className='border-[14px] border-[#fffffff1]  w-[90%] h-[360px] sm:w-[1121px] sm:h-[400px] mx-auto block'>            
            <h4 className="leading-[1.2] sm:leading-normal pt-[4.5rem] block text-center text-[1.8rem] sm:text-[2.15rem] text-blueDark font-semibold">¿Tuviste COVID y aun presentas sintomas?</h4>
            <p className='mt-5 text-center text-[#273E5E]'>Revisa el estado de tus pulmones con una radiografia de torax</p>
            <button className="hover_scale mt-[3rem] block rounded-md mx-auto px-6 py-3 text-[18px] text-[#455272] bg-[#FFFFFF]">Agenda una TAC de torax</button>
        </div>
    </section>
  )
}

export default SectionAgendaTACTorax