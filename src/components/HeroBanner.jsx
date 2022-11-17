import React from 'react'
import Doctor1 from '../assets/images/Img-doctors-1.png'
const HeroBanner = () => {
  return (
    <section className='mx-28 flex flex-row items-center justify-between'>
        <div className='max-w-[460px]'>
            <h1 className='text-[3.6rem] leading-[4.25rem] mt-20 font-semibold text-blueDark'>Encuentra tu especialista y pide cita</h1>
            <p className='mt-4 text-grey'>180 000 profesionales estan aqui para ayudarte</p>
            <button className='px-12 py-3 mt-14 bg-primary hover:bg-[#49a18b] text-[#FFFFFF] rounded-md'>
                Ver especialistas
            </button>        
        </div>
        <div className='relative mt-10 mr-16'>
            <div className='bg-primary z-10 relative w-[380px] h-[400px] border-[14px] border-white overflow-hidden rounded-t-[200px] rounded-b-[20px]'>
                <img className='absolute right-[40px] -bottom-1' width="250px" height="280px" src={Doctor1} alt="docto en bata blanca" />
            </div>
            <div className='green__gradient w-[600px] h-[600px] absolute right-0 bottom-0'>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner