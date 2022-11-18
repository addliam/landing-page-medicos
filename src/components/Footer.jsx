import React from 'react'
import Logo from '../assets/icons/medicineLogo.png'
import FacebookLogo from '../assets/icons/facebook.svg'
import TwitterLogo from '../assets/icons/twitter.svg'
import InstagramLogo from '../assets/icons/instagram.svg'
import footerLinks from './static/footerLinks.json'

const SocialMediaComponent = ({logo, alt}) => {
    return (
    <a href="/facebook" className="hover_scale w-[36px] h-[36px] flex flex-row justify-center items-center" >
        <img src={logo} alt={alt} />
    </a>        
    )
}

const FooterListComponent = ({data}) => {
    return (
        <div>
            <span className='text-blueDark font-semibold text-lg'>{data.tema}</span>
            <ul className='mt-1'>
                {
                    data.items.map((item, indx)=>(
                        <li key={indx} className='text-[#455565] hover:text-[#252e36] text-base py-[6px] sm:py-1'>
                            <a href={item.enlace}>
                            {item.nombre}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

const Footer = () => {
  return (
    <footer className='layout-x layout-y flex flex-col sm:flex-row justify-between bg-[#E9F6FC]'>
        <div className='flex flex-col'>
            <a href="/" className='flex flex-row gap-2 items-center '>
                <img src={Logo} height='48px' width='48px' className='w-8 h-8 sm:w-9 sm:h-9' alt="tusalud logo" />
                <span className='text-[22px] sm:text-[28px] font-semibold text-[#3b8686] ' >TuSalud</span>
            </a>
            <address className='social-media flex flex-row mt-5 gap-2'>
                <SocialMediaComponent logo={FacebookLogo} alt="facebook logo" />
                <SocialMediaComponent logo={TwitterLogo} alt="twitter logo" />
                <SocialMediaComponent logo={InstagramLogo} alt="instagram logo" />
            </address>
        </div>
        <div className='items-wrapper flex flex-col sm:flex-row sm:gap-20 sm:mt-0 mt-9 gap-6'>
            {
            footerLinks.map((footerListData, indx)=>{
                return (
                    <FooterListComponent key={indx} data={footerListData} />
                )
            })
            }
        </div>
    </footer>
  )
}

export default Footer