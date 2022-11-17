import React from 'react'
import Doctor1 from '../assets/images/Img-doctors-1.png'
import Disability from '../../src/assets/icons/disability.svg'
import Add from '../../src/assets/icons/add.svg'
import Drug from '../../src/assets/icons/drug.svg'
import './styles/HeroBanner.css'

const HeroBanner = () => {
  return (
    <section className='px-28 flex flex-row items-end justify-between overflow-x-clip relative border-2 border-black pb-20'>
        <div className='max-w-[460px] mb-4'>
            <h1 className='text-[3.6rem] leading-[4.25rem] mt-16 font-semibold text-blueDark tracking-tight'>Encuentra tu especialista y pide cita</h1>
            <p className='mt-4 text-grey'>180 000 profesionales estan aqui para ayudarte</p>
            <button className='px-12 py-3 mt-14 bg-primary hover:bg-[#49a18b] text-[#FFFFFF] rounded-md'>
                Ver especialistas
            </button>        
        </div>
        <div className='relative mt-10'>
            <div className='bg-primary z-10 relative w-[380px] h-[400px] border-[14px] border-[#FFFFFF]  rounded-t-[200px] rounded-b-[20px] mr-20'>
                <img className='absolute right-[40px] -bottom-1' width="250px" height="280px" src={Doctor1} alt="doctor en bata blanca" />

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