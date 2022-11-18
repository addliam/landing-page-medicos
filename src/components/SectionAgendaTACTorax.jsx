import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import RectanguloVerdeWave from '../assets/images/RectanguloVerdeWaves.svg'

const SectionAgendaTACTorax = () => {
  return (
    <section className="layout-y w-full">
        <div style={{backgroundImage: `url(${RectanguloVerdeWave})`}} className='border-[14px] border-[#fffffff1]  w-[90%] h-[360px] sm:w-[1121px] sm:h-[400px] mx-auto block relative'>            
            <AnimationOnScroll animateIn='animate__fadeInUp'>
              <h4 className="leading-[1.2] sm:leading-normal pt-[4.5rem] block text-center text-[1.8rem] sm:text-[2.15rem] text-blueDark font-semibold">¿Tuviste COVID y aun presentas sintomas?</h4>
            </AnimationOnScroll>
            <p className='mt-5 text-center text-[#273E5E]'>Revisa el estado de tus pulmones con una radiografia de torax</p>
            <button className="hover_scale mt-[3rem] block rounded-md mx-auto px-6 py-3 text-[18px] text-[#455272] bg-[#FFFFFF]">Agenda una TAC de torax</button>
        <div className='green__gradient rounded-[50%] w-[520px] h-[520px] absolute -left-[200px] -top-[200px]'></div>
        <div className='green__gradient_2 rounded-[50%] w-[400px] h-[400px] absolute -right-[200px] -bottom-[200px]'></div>
        </div>

    </section>
  )
}

export default SectionAgendaTACTorax