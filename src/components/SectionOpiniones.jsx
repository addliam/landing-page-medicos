import React from 'react'
import OpinionsComponent from './OpinionsComponent'
import Avatar1 from '../assets/images/Img-opinions-1.png'
import Avatar2 from '../assets/images/Img-opinions-2.png'
import Avatar3 from '../assets/images/Img-opinions-3.png'
import Avatar4 from '../assets/images/Img-opinions-4.png'
import dataOpinions from './static/opinions.json'

const SectionOpiniones = () => {
  return (
    <section className='mx-28 layout-y relative'>
        <img className='absolute z-50 left-[90px] top-[112px] ' src={Avatar1} width="75px" height="75px" alt="avatar" />
        <img className='absolute z-50 bottom-[200px] left-[15px] ' src={Avatar2} width="50px" height="50px" alt="avatar" />
        <img className='absolute right-[120px] top-[130px] z-50 ' src={Avatar3} width="50px" height="50px" alt="avatar" />
        <img className='absolute z-50 right-[30px] bottom-[240px] ' src={Avatar4} width="75px" height="75px" alt="avatar" />

        <div className='absolute z-50 w-full'>
            <h4 className='z-50 section_title text-center'>Opiniones mas recientes</h4>
            <OpinionsComponent data={dataOpinions} />
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