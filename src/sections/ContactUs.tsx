import React from 'react'
import Container from '../components/Container'
import coverImg from '../assets/cover.png'
import ProgressBar from '../components/ProgressBar'
import { FaLocationPin } from 'react-icons/fa6'
import { IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ContactDetails, SocialLinks } from '../config/config'
const ContactUs = () => {
  return (
    <Container bgPrimary className='' id='contact'>
      <div style={{ backgroundImage: `url('${coverImg}')` }} className='min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-center w-full px-5 lg:px-20'>
        <div className='text-white mx-auto my-8 lg:w-1/2 w-full px-0 lg:px-20'>
          <h2 className='text-xl lg:text-3xl mb-5'>Let's talk with us</h2>
          <ProgressBar />
          <p className=' text-lg lg:text-xl my-10'>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>

          <div className='flex flex-col space-y-5 lg:space-y-7'>
            <Link to={'#'} className='flex items-center justify-start gap-3 hover:-translate-y-1 w-max transition-all'>
              <IoLocation size={32} className='text-amber-400' />
              <span className='text-sm lg:text-xl'>
                Mr & Mrs Driving School<br />
                Fuel Station Building,<br />
                Kekanadura, Matara
              </span>
            </Link>

            <Link to={`https://wa.me/${ContactDetails.MOBILE}`} className='flex items-center justify-start gap-3 hover:-translate-y-1 w-max transition-all'>
              <IoLogoWhatsapp size={32} className='text-amber-400' />
              <span className='text-sm lg:text-xl'>
                {ContactDetails.MOBILE}
              </span>
            </Link>


            <Link to={SocialLinks.FACEBOOK} className='flex items-center justify-start gap-3 hover:-translate-y-1 w-max transition-all'>
              <IoLogoFacebook size={32} className='text-amber-400' />
              <span className='text-sm lg:text-xl'>
                Mr&Mrs Driving School
              </span>
            </Link>


            <Link to={SocialLinks.INSTAGRAM} className='flex items-center justify-start gap-3 hover:-translate-y-1 w-max transition-all'>
              <IoLogoInstagram size={32} className='text-amber-400' />
              <span className='text-sm lg:text-xl'>
                Mr & Mrs Driving School
              </span>
            </Link>


            <Link to={`mailto:${ContactDetails.EMAIL}`} className='flex items-center justify-start gap-3 hover:-translate-y-1 w-max transition-all'>
              <IoMail size={32} className='text-amber-400' />
              <span className='text-sm lg:text-xl'>
                {ContactDetails.EMAIL}
              </span>
            </Link>
          </div>
        </div>
        <form className='border-2 border-amber-400 rounded-xl p-5 lg:p-10  mx-auto my-8 lg:w-1/3 w-full flex flex-col items-center space-y-5'>
          <div className='flex items-center justify-center gap-2 lg:gap-5 w-full'>
            <input type="text" className='px-4 py-3 rounded-full outline-none focus:outline-none border-none w-full' placeholder='First Name' />
            <input type="text" className='px-4 py-3 rounded-full outline-none focus:outline-none border-none w-full' placeholder='Last Name' />
          </div>
          <input type="email" className='px-4 py-3 rounded-full outline-none focus:outline-none border-none w-full' placeholder='Email' />
          <input type="tel" className='px-4 py-3 rounded-full outline-none focus:outline-none border-none w-full' placeholder='Phone Number' />
          <textarea name="" id="" rows={10} placeholder='Your Message' className='px-4 py-3 rounded-xl outline-none focus:outline-none border-none w-full'>

          </textarea>
          <button className='bg-amber-400 hover:bg-amber-500 px-5 py-3 rounded-full w-full'>Send Message</button>
        </form>

      </div>
    </Container>
  )
}

export default ContactUs