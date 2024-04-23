import { useState } from 'react'
import logoImage from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

const TopNav = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }
    return (
        <header className='fixed w-full top-0 left-0 flex flex-row items-center  xl:items-start justify-between px-10 py-5'>
            <div className='w-20 xl:w-32 min-w-20'>
                <img src={logoImage} className='w-full h-full object-contain' />
            </div>
            <div className=' w-full relative'>
                <nav className={`absolute top-20 backdrop-blur-md xl:top-0 right-0 w-full xl:relative flex flex-col xl:flex-row items-center justify-center gap-2 py-10 transition-all duration-500 overflow-hidden xl:py-0 ${isOpen ? 'opacity-100 h-max' : 'opacity-0 h-0 xl:h-max  xl:opacity-100'}`}>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>Home</Link>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>About us</Link>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>Free Tutorials</Link>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>Contact Us</Link>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>Servicers</Link>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>Blog</Link>
                    <Link to={'#'} className='px-4 py-2 text-white hover:text-amber-500'>Testimonials</Link>
                    <button className='px-10 py-2 rounded-full bg-[#F3AE31] hover:bg-amber-400 text-nowrap text-white'>Schedule Consultation</button>
                </nav>
            </div>

            <div className='w-max xl:hidden block text-white'>
                {
                    isOpen ? <button onClick={handleMenu}><CiMenuFries size={32} /></button> : <button onClick={handleMenu}><CiMenuBurger size={32} /></button>
                }
            </div>

        </header>
    )
}

export default TopNav