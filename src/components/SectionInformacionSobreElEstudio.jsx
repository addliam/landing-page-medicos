import React from 'react'
import Doctor3 from '../assets/images/Img-doctors-3.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SectionInformacionSobreElEstudio = () => {
  return (
    <section className="layout-y pl-[22px] sm:pl-28 sm:pr-0 flex flex-col sm:flex-row justify-between">
      <div className='pr-[22px] sm:pr-0'>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
        <h4 className='section_title w-[100%] sm:max-w-[480px] leading-[1.3em] '>Informacion necesaria sobre el estudio en un solo lugar</h4>
      </AnimationOnScroll>
        <ul className='mt-8'>
          <li className='text-base text-[#647181] max-w-[400px]'>
            Procedimiento del estudio
          </li>
          <li className='text-base text-[#647181] mt-5 max-w-[400px]'>
            Preguntas frecuentes
          </li>
          <li className='text-base text-[#647181] mt-5 max-w-[400px]'>
            Recomendaciones sobre como prepararse para un estudio
          </li>
        </ul>
        <button className='w-[20rem] sm:w-auto px-12 py-3 mt-8 sm:mt-10 bg-primary hover:bg-[#49a18b] text-[#FFFFFF] rounded-md'>
          Leer mas sobre los estudios
        </button>   
      </div>
      <AnimationOnScroll animateIn='animate__fadeInRight' style={{alignSelf: 'flex-end'}}>
      <div className=' green_blue_gradient_y w-[340px] h-[250px] sm:w-[620px] sm:h-[370px] border-l-[12px] sm:border-l-[8px] border-y-[8px] sm:border-y-[12px] border-[#FFFFFF] rounded-l-[22rem] self-end mt-20 sm:mt-0 relative'>
        <div className='w-fit h-fit absolute z-10 right-0 -bottom-[1px]'>
          <img className='w-[250px] h-[310px] sm:w-[360px] sm:h-[440px]' width="360px" height="440px" src={Doctor3} alt="doctora con equipo biologico" />
        </div>
      </div>
      </AnimationOnScroll>
      
    </section>
  )
}

export default SectionInformacionSobreElEstudio