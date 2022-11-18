import React from 'react'
import Doctors2 from '../assets/images/Img-doctors-2.png'
import Shield from '../assets/icons/shield.svg'
import Covid from '../assets/icons/covid.svg'
import Hospital from '../assets/icons/hospital.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SectionAgendaTuEstudio = () => {
  return (
    <section className='layout-y layout-x flex sm:flex-row flex-col-reverse justify-between relative '>
        <div className='green__gradient w-[520px] h-[520px] absolute -left-[200px] bottom-[20px]'></div>
        <AnimationOnScroll animateIn="animate__fadeInDown">
            <div className='z-10 mt-16 sm:mt-0 green_blue_gradient rounded-b-[14rem] h-[340px] w-[340px] sm:h-[420px] sm:w-[400px] border-[10px] sm:border-[14px] border-[#FFFFFF] relative'>
                <img className='absolute left-[35px] -bottom-[2px] h-[350px] w-[420px] sm:h-[400px] sm:w-[400px] ' src={Doctors2} width="400px" height="420px" alt="doctores varon y mujer" />
            </div>
        </AnimationOnScroll>

        <div className='mr-0 sm:mr-28'>
            <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>  
                <h4 className='section_title w-[100%] sm:max-w-[420px] leading-[1.3em] '>Encuentra un centro de diagnostico y agenda tu estudio</h4>
            </AnimationOnScroll>
            <p className='section_descr mt-4 max-w-[420px]'>
                Compara los precios del estudio en diferentes centros de diagnostico
            </p>
            <div className='mt-7'>
                <ul>
                    <li className='flex flex-row items-center'>
                        <img width="45px" height="45px" src={Shield} alt="shield" />
                        <span className='text-[#657181] ml-3'>Protegemos tu salud</span>
                    </li>
                    <li className='flex flex-row items-center mt-5'>
                        <img width="45px" height="45px" src={Covid} alt="covid" />
                        <span className='text-[#657181] ml-3'>Pruebas de Covid-19</span>
                    </li>
                    <li className='flex flex-row items-center mt-5'>
                        <img width="45px" height="45px" src={Hospital} alt="hospital" />
                        <span className='text-[#657181] ml-3'>Un centro cerca de ti</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default SectionAgendaTuEstudio