import React, { useState } from 'react'

const IndexOpinion = ({indx, len, indexHandler}) => {
    const ChangeIndexHandler = (value) => {
        console.log(`You have selected value: ${value}`);
    }
    return (
        <div className='flex flex-row gap-2 mx-auto w-full justify-center mt-4'>
            {
                Array(len).fill('x').map((item, index)=>{
                    return (index === indx) ? (
                        <div key={index} onClick={()=>indexHandler(index)} className='bg-primary rounded-lg w-6 h-3 cursor-pointer' />
                    ):(                            
                        <div key={index} onClick={()=>indexHandler(index)} className='bg-[#E3E4E4] rounded-lg w-3 h-3 cursor-pointer' />
                    )
                })
            }
        </div>
    )
}
const OpinionsComponent = ({data}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const len = data.length

    return (
    <>
    <div className='z-50 quote mx-auto mt-8 w-[750px] h-[310px] rounded-xl px-8 py-8 bg-[#FFFFFF]'>
    <figure className='flex flex-col h-full justify-between'>
        <blockquote className='max-w-[500px] mx-auto'>
            <p className='text-lg font-medium text-[#515C7C] text-center'>
                {data[selectedIndex].contenido}
            </p>
        </blockquote>
        <figcaption className='text-[20px] text-center font-semibold text-blueDark'>
        {data[selectedIndex].autor} <br /> <cite className='text-base font-normal text-grey'>{data[selectedIndex].cargo}</cite>
        </figcaption>                    
    </figure>
    </div>
    <div>
        <IndexOpinion indx={selectedIndex} len={len} indexHandler={setSelectedIndex} />
    </div>
    </>
    )
}

export default OpinionsComponent