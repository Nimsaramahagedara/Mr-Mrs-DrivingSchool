import { useEffect, useState } from 'react'
import logoImage from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from '../config/config';

const TopNav = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              navLinks.forEach(link => {
                link.classList.remove("text-black");  // Remove active class from all
                link.classList.add("text-gray-600");  // Reset to default
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                  link.classList.remove("text-gray-600");
                  link.classList.add("text-black");  // Add active class to the visible section
                }
              });
            }
          });
        }, { threshold: 0.5 });  // Trigger when 50% of the section is visible
    
        sections.forEach(section => {
          observer.observe(section);
        });
      }, [])

      
      const scrollIntoView = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return (
        <header className='fixed w-full top-0 left-0 flex flex-col xl:flex-row items-center xl:items-start justify-between px-10 py-5 z-20'>
            <div className='w-full xl:w-max flex justify-between items-center'>
                <div className='w-20 xl:w-32 min-w-20'>
                    <img src={logoImage} className='w-full h-full object-contain' />
                </div>
                <div className='w-max xl:hidden block text-white'>
                    {
                        isOpen ? <button onClick={handleMenu}><CiMenuFries size={32} className='text-gray-500'/></button> : <button onClick={handleMenu}><CiMenuBurger size={32} className='text-gray-500'/></button>
                    }
                </div>
            </div>
            <nav className={`backdrop-blur-md bg-black/50 xl:bg-transparent xl:backdrop-blur-none xl:top-0 right-0 w-full xl:relative flex flex-col xl:flex-row items-center justify-center gap-2 py-10 transition-all duration-500 overflow-hidden xl:py-0 ${isOpen ? 'opacity-100 h-max' : 'opacity-0 h-0 xl:h-max  xl:opacity-100'}`}>
                {
                    navLinks.map((link,idx) => (
                        <Link to={link.link} onClick={() => scrollIntoView(link.link.slice(1))} key={idx} className='px-4 py-2 text-white hover:text-amber-500'>{link.title}</Link>
                    ))
                }
                <button className='px-10 py-2 rounded-full bg-[#F3AE31] hover:bg-amber-400 text-nowrap text-white'>Schedule Consultation</button>
            </nav>

        </header>
    )
}

export default TopNav