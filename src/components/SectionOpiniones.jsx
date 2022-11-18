import React from 'react'
import Avatar1 from '../assets/images/Img-opinions-1.png'
import Avatar2 from '../assets/images/Img-opinions-2.png'
import Avatar3 from '../assets/images/Img-opinions-3.png'
import Avatar4 from '../assets/images/Img-opinions-4.png'

const OpinionComponent = () => {
    return (
    <div className='z-50 quote mx-auto mt-8 w-[750px] h-[310px] rounded-xl px-8 py-8 bg-[#FFFFFF]'>
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

const IndexOpinion = () => {
    return (
        <div className='flex flex-row gap-2 mx-auto w-full justify-center mt-4'>
            <div className='bg-primary rounded-lg w-6 h-3 cursor-pointer' />
            <div className='bg-[#E3E4E4] rounded-lg w-3 h-3 cursor-pointer' />
            <div className='bg-[#E3E4E4] rounded-lg w-3 h-3 cursor-pointer' />
            <div className='bg-[#E3E4E4] rounded-lg w-3 h-3 cursor-pointer' />
        </div>
    )
}

const SectionOpiniones = () => {
  return (
    <section className='mx-28 layout-y relative'>
        <img className='absolute z-50 left-[90px] top-[112px] ' src={Avatar1} width="75px" height="75px" alt="avatar" />
        <img className='absolute z-50 bottom-[200px] left-[15px] ' src={Avatar2} width="50px" height="50px" alt="avatar" />
        <img className='absolute right-[120px] top-[130px] z-50 ' src={Avatar3} width="50px" height="50px" alt="avatar" />
        <img className='absolute z-50 right-[30px] bottom-[240px] ' src={Avatar4} width="75px" height="75px" alt="avatar" />

        <div className='absolute z-50 w-full'>
            <h4 className='z-50 section_title text-center'>Opiniones mas recientes</h4>
            <OpinionComponent />
            <IndexOpinion />
        </div>
        <div className='z-0 flex flex-row justify-center items-center w-full '>
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