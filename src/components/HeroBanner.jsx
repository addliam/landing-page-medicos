import React from 'react'
import Doctor1 from '../assets/images/Img-doctors-1.png'
import Disability from '../../src/assets/icons/disability.svg'
import Add from '../../src/assets/icons/add.svg'
import Drug from '../../src/assets/icons/drug.svg'
import './styles/HeroBanner.css'

const HeroBanner = () => {
  return (
    <section className='px-[22px] sm:px-28 flex flex-col sm:flex-row items-start sm:items-end justify-between overflow-x-clip relative pb-20'>
        <div className='max-w-[460px] mb-4'>
            <h1 className='text-[28px] sm:text-[3.6rem] leading-[28px] sm:leading-[4.25rem] mt-16 font-semibold text-blueDark tracking-tight'>Encuentra tu <br className='block sm:hidden' /> especialista y pide cita</h1>
            <p className='max-w-[300px] sm:max-w-none mt-4 text-[20px] sm:text-base text-grey'>180 000 profesionales estan aqui para ayudarte</p>
            <button className='w-[20rem] sm:w-auto px-12 py-3 mt-8 sm:mt-14 bg-primary hover:bg-[#49a18b] text-[#FFFFFF] rounded-md'>
                Ver especialistas
            </button>        
        </div>
        <div className='relative mt-10'>
            <div className='bg-primary ml-8 z-10 relative w-[300px] h-[320px] sm:w-[380px] sm:h-[400px] border-[14px] border-[#FFFFFF] rounded-t-[200px] rounded-b-[20px] mr-20'>
                <div className=''>
                    <img className='absolute right-[30px] sm:right-[40px] -bottom-0 w-[200px] h-[290px] sm:w-[250px] sm:h-[360px]' width="250px" height="360px" src={Doctor1} alt="doctor en bata blanca" />
                </div>
                <div className='z-50 border-2 border-[#FFFFFF] rounded-[14px] bg-[#CEEBF3E6] w-[58px] h-[58px] absolute bottom-[80px] -left-[36px] floating_animation'>
                    <img className='border-none z-50' width="58px" height="58px" src={Disability} alt="disability" />
                </div>
                <div className='z-50 border-2 border-[#FFFFFF] rounded-[14px] bg-[#CEEBF3E6] w-[58px] h-[58px] absolute top-[20px] right-[20px] floating_animation'>
                    <img className='border-none z-50' width="58px" height="58px" src={Add} alt="add" />
                </div>
                <div className='z-50 border-2 border-[#FFFFFF] rounded-[14px] bg-[#CEEBF3E6] w-[58px] h-[58px] absolute bottom-[40px] -right-[36px] floating_animation'>
                    <img className='border-none z-50' width="58px" height="58px" src={Drug} alt="drug" />
                </div>
            </div>
            <div className='green__gradient_2 w-[400px] h-[400px] absolute right-[220px] bottom-[60px]'>
            </div>
            <div className='green__gradient w-[520px] h-[520px] absolute -right-[270px] -bottom-[220px]'>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner