import React from 'react'

const OpinionComponent = () => {
    return (
    <div className='z-50 quote mx-auto mt-8 w-[780px] h-[310px] rounded-xl px-8 py-8 bg-[#FFFFFF]'>
    <figure className='flex flex-col h-full justify-between'>
        <blockquote className='max-w-[500px] mx-auto'>
            <p className='text-lg font-medium text-[#515C7C] text-center'>Excelente trato y atencion. Ademas de explicar todo de forma detallada. Muy profesional en todos los sentidos</p>
        </blockquote>
        <figcaption className='text-[20px] text-center font-semibold text-blueDark'>
            Marilyn Chacon Leon <br /> <cite className='text-base font-normal text-grey'>Paciente</cite>
        </figcaption>                    
    </figure>
    </div>
    )
}

const SectionOpiniones = () => {
  return (
    <section className='mx-28 layout-y relative'>
        <div className='absolute z-50 w-full'>
            <h4 className='z-50 section_title text-center'>Opiniones mas recientes</h4>
            <OpinionComponent />
        </div>
        <div className='z-0  flex flex-row justify-center items-center w-full '>
            <div className='ellipse_group z-0 flex justify-center items-center relative w-[1050px] h-[490px]'>
                <div className='absolute w-[635px] h-[300px] border-[1px] border-primary   rounded-[50%] bg-transparent' />
                <div className='absolute w-[865px] h-[400px] border-[1px] border-primary rounded-[50%] bg-transparent' />
                <div className='absolute w-[1050px] h-[490px] border-[1px] border-primary rounded-[50%]' />
            </div>
        </div>        
    </section>
  )
}

export default SectionOpiniones