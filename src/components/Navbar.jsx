import React, {useState} from 'react'
import Logo from '../assets/icons/medicineLogo.png'
import Menu from '../assets/icons/menuRounded.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='px-[22px] sm:px-28 flex flex-row justify-between py-4 sm:py-5'>
        <a href="/" className='flex flex-row gap-2 items-center '>
            <img src={Logo} height='48px' width='48px' className='w-8 h-8 sm:w-9 sm:h-9' alt="tusalud logo" />
            <span className='text-[22px] sm:text-[28px] font-semibold text-[#3b8686] ' >TuSalud</span>
        </a>
        <div onClick={()=>setShowMenu(prev=>!prev)} className='sm:hidden bg-[#FFFFFF] w-[38px] h-[38px] rounded-lg flex flex-row items-center justify-center cursor-pointer '>
            <img src={Menu} alt="menu rounded" width="22px" height="22px" />
        </div>
        {
            showMenu?(
            <nav className='mobile_menu flex sm:hidden z-50 bg-[#FFFFFF] absolute top-[70px] left-0 w-screen'>
                <ul className='mx-auto h-screen my-8'>
                    <li className='my-8 text-center'>
                        <a className='text-grey' href="#especialistas">Especialistas</a>
                    </li>
                    <li className='my-8 text-center'>
                        <a className='text-grey' href="#estudios">Estudios</a>
                    </li>
                    <li className='my-8 text-center'>
                        <a className='text-grey' href="#preguntas-frecuentes">Preguntas frecuentes</a>
                    </li>                
                </ul>
            </nav>
            ):(<></>)
        }
        <nav className='hidden sm:flex flex-row items-center gap-10'>
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