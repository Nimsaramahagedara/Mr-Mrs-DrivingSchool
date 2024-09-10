import logo from '../assets/logo.png'
import ios from '../assets/ios.png'
import appStore from '../assets/appstore.png'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { ContactDetails, navLinks, SocialLinks } from '../config/config'
import { Link } from 'react-router-dom'
import RotatingSquare from '../components/RotatingSquare'
import ThreeCross from '../components/ThreeCross'
import ThreeTriangle from '../components/ThreeTriangle'
import ySign from '../assets/ySign.png'
type Props = {}

function Footer({ }: Props) {
  return (
    <footer id='footer' className='w-full bg-white text-white relative overflow-y-hidden'>
      <div className='bg-[#050A1E] rounded-tl-[50px] lg:rounded-tl-[15vw] flex flex-col md:flex-row gap-5 md:gap-0 items-start justify-between px-5 xl:px-20 py-20'>
        <div className='w-full xl:w-1/4 flex flex-col space-y-5 items-center justify-center'>
          <div className='flex items-center justify-center gap-8'>
            <div className='w-20'>
              <img src={logo} className='w-ful h-full object-contain' />
            </div>
            <h2 className='text-xl xl:text-2xl text-center'>Mr & Mrs<br /> Driving School</h2>
          </div>
          <span className='text-sm'>Download the app by clicking the link below :</span>
          <div className='flex items-center justify-center gap-4 px-10'>
            <div>
              <img src={ios} className='w-full h-full object-contain' />
            </div>
            <div>
              <img src={appStore} className='w-full h-full object-contain' />
            </div>
          </div>

        </div>
        <div className='hidden md:block'>
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
          <h2 className='mb-5'>Contacts</h2>
          <ul className='flex flex-col gap-2'>
            <Link to={`tel:${ContactDetails.MOBILE}`} className='hover:text-amber-400'>{ContactDetails.MOBILE}</Link>
            <Link to={`mailto:${ContactDetails.EMAIL}`} className='hover:text-amber-400'>{ContactDetails.EMAIL}</Link>
            <Link to={`tel:${ContactDetails.LOCATION}`} className='hover:text-amber-400'>{ContactDetails.LOCATION}</Link>
          </ul>
        </div>
        <div>
          <h2 className='mb-5'>Social Media</h2>
          <div className='flex items-center justify-center md:gap-8 gap-2'>
            <Link to={SocialLinks.FACEBOOK} target='_blank' rel='noopener noreferrer' className='hover:text-amber-400'><FaFacebookF size={20} /></Link>
            <Link to={SocialLinks.TWITTER} target='_blank' rel='noopener noreferrer' className='hover:text-amber-400'><FaX size={20} /></Link>
            <Link to={SocialLinks.LINKEDIN} target='_blank' rel='noopener noreferrer' className='hover:text-amber-400'><FaLinkedin size={20} /></Link>
            <Link to={SocialLinks.INSTAGRAM} target='_blank' rel='noopener noreferrer' className='hover:text-amber-400'><FaInstagram size={20} /></Link>



          </div>
        </div>

      </div>

      <div className='text-center bg-[#11112E] text-white py-5 '>
        © 2024 <span className='text-amber-400'>Mr & Mrs Driving School</span> all rights reserved.
      </div>
      <RotatingSquare className='bottom-0 left-0' />
      <ThreeCross className='top-10 right-5' />
      <ThreeTriangle classNames='bottom-20 right-10 md:left-20 flex' />
      <div className='absolute bottom-10 right-0 lg:right-20 w-1/2 lg:w-1/6 aspect-square '>
        <img src={ySign}  className='w-full h-full object-contain' />
      </div>
    </footer>
  )
}

export default Footer