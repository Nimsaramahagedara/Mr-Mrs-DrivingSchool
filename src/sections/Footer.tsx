import logo from '../assets/logo.png'
import ios from '../assets/ios.png'
import appStore from '../assets/appstore.png'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { navLinks } from '../config/config'
import { Link } from 'react-router-dom'

type Props = {}

function Footer({ }: Props) {
  return (
    <footer className='w-full bg-white text-white'>
      <div className='bg-[#050A1E] rounded-tl-[50px] lg:rounded-tl-[15vw] flex items-start justify-between px-10 xl:px-20 py-20'>
        <div className='w-full xl:w-1/4 flex flex-col space-y-5 items-center justify-center'>
          <div className='flex items-center justify-center gap-3'>
            <div className='w-20'>
              <img src={logo} className='w-ful h-full object-contain' />
            </div>
            <h2 className='text-xl xl:text-2xl text-center'>Mr & Mrs<br /> Driving School</h2>
          </div>
          <span>Download the app by clicking the link below :</span>
          <div className='flex items-center justify-center gap-4 px-10'>
            <div>
              <img src={ios} className='w-full h-full object-contain' />
            </div>
            <div>
              <img src={appStore} className='w-full h-full object-contain' />
            </div>
          </div>

        </div>
        <div>
          <h2 className='mb-5'>Pages</h2>
          <ul className='flex flex-col gap-2'>
           {
            navLinks.map((link) => (
              <Link key={link.id} className='hover:text-amber-400' to={link.link}>{link.title}</Link>
            ))
           }
          </ul>
        </div>
        <div>
          <h2 className='mb-5'>Social Media</h2>
          <div className='flex items-center justify-center gap-2'>
            <FaFacebookF  size={20}/>
            <FaX size={20}/>
            <FaLinkedin size={20}/>
            <FaInstagram  size={20}/>
          </div>
        </div>

      </div>

      <div className='text-center bg-[#11112E] text-white py-5 '>
        © 2024 <span className='text-amber-400'>Mr & Mrs Driving School</span> all rights reserved.
      </div>
    </footer>
  )
}

export default Footer