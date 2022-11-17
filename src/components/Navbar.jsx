import React from 'react'
import Logo from '../assets/icons/medicineLogo.png'

const Navbar = () => {
  return (
    <header className='mx-28 flex flex-row justify-between my-5'>
        <a href="/" className='flex flex-row gap-2 items-center'>
            <img src={Logo} height='48px' width='48px' className='w-9 h-9' alt="tusalud logo" />
            <span className='text-[28px] font-semibold text-greenDark ' >TuSalud</span>
        </a>
        <nav className='flex flex-row items-center gap-10'>
            <ul className='flex flex-row gap-16 items-center'>
                <li>
                    <a className='text-grey' href="#especialistas">Especialistas</a>
                </li>
                <li>
                    <a className='text-grey' href="#estudios">Estudios</a>
                </li>
                <li>
                    <a className='text-grey' href="#preguntas-frecuentes">Preguntas frecuentes</a>
                </li>
            </ul>
            <button className='px-5 py-3 bg-primary hover:bg-[#49a18b] text-[#FFFFFF] rounded-md'>
                Iniciar sesion
            </button>
        </nav>
    </header>
  )
}

export default Navbar