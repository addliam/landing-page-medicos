import React from 'react'
import OpinionsComponent from './OpinionsComponent'
import Avatar1 from '../assets/images/Img-opinions-1.png'
import Avatar2 from '../assets/images/Img-opinions-2.png'
import Avatar3 from '../assets/images/Img-opinions-3.png'
import Avatar4 from '../assets/images/Img-opinions-4.png'
import dataOpinions from './static/opinions.json'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SectionOpiniones = () => {
  return (
    <section className='sm:mx-28 mx-[22px] py-24 sm:layout-y relative'>
        <img className='absolute z-50 left-[6px] top-[30px] sm:left-[90px] sm:top-[112px] sm:w-[75px] sm:h-[75px]  w-[60px] h-[60px]' src={Avatar1} width="75px" height="75px" alt="avatar" />
        <img className='absolute z-50 bottom-[140px] left-[25px] sm:bottom-[200px] sm:left-[15px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]' src={Avatar2} width="50px" height="50px" alt="avatar" />
        <img className='absolute sm:right-[120px] sm:top-[130px] right-[2px] top-[38px] z-50 sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]' src={Avatar3} width="50px" height="50px" alt="avatar" />
        <img className='absolute z-50 sm:right-[30px] sm:bottom-[240px] right-[30px] bottom-[120px] sm:w-[75px] sm:h-[75px] w-[60px] h-[60px]' src={Avatar4} width="75px" height="75px" alt="avatar" />

        <div className='absolute z-50 w-full'>
          <AnimationOnScroll animateIn='animate__zoomInUp' animateOnce={true}>
            <h4 className='z-50 section_title text-center'>Opiniones mas recientes</h4>
          </AnimationOnScroll>
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