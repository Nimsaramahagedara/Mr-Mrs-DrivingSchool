import { TestimonialType } from "../components/ReviewCard"
import { NavLinksType } from "../types/types"
import img1 from '../assets/Services/1.png';
import img2 from '../assets/Services/2.png';
import img3 from '../assets/Services/3.png';
import img4 from '../assets/Services/4.png';
import img5 from '../assets/Services/5.png';
import img6 from '../assets/Services/6.png';
import img7 from '../assets/Services/7.png';
import img8 from '../assets/Services/8.png';
import img9 from '../assets/Services/9.png';
import img10 from '../assets/Services/10.png';
import img11 from '../assets/Services/11.png';
import img12 from '../assets/Services/12.png';

// Home
// About Us
// Contact Us
// Free Tutorials
// Servicers
// Blog
// Testimonials

export const navLinks: NavLinksType[] = [
    {
        id: 1,
        title: 'Home',
        link: '#home'
    },
    {
        id: 2,
        title: 'About Us',
        link: '#about'
    },
    {
        id: 3,
        title: 'Contact Us',
        link: '#contact'
    },
    {
        id: 4,
        title: 'Free Tutorials',
        link: '#tute'
    },
    {
        id: 5,
        title: 'Servicers',
        link: '#service'
    },
    {
        id: 6,
        title: 'Blog',
        link: '#blog'
    },
    {
        id: 7,
        title: 'Testimonials',
        link: '#testimonial'
    },
]

export const ContactDetails = {
    MOBILE: '0775737727',
    WEB: '',
    EMAIL: 'mrnmrsdrivingschool@gmail.com',
    LOCATION: `Mr & Mrs Driving School 
Fuel Station Building, 
Kekanadura, Matara`
}

export const SocialLinks = {
    FACEBOOK: 'https://www.facebook.com/mrnmrsdrivingschool/',
    INSTAGRAM: 'https://www.instagram.com/mrnmrsdrivingschool/',
    TWITTER: 'https://twitter.com/mrnmrsdrivingschool',
    LINKEDIN: 'https://www.linkedin.com/company/mrnmrsdrivingschool/',
}

//Gallery
export const MIN_WIDTH = 110
export const MAX_WIDTH = 85


// Testimonials
export const Testimonials : TestimonialType[] = [
    {
        imgUrl:'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid',
        name: 'Sherri Cronin',
        occupation:'Dynamic Program Designer',
        title:'Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.'
    },
    {
        imgUrl:'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid',
        name: 'Sherri Cronin',
        occupation:'Dynamic Program Designer',
        title:'Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.'
    },
    {
        imgUrl:'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid',
        name: 'Sherri Cronin',
        occupation:'Dynamic Program Designer',
        title:'Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.'
    },
    {
        imgUrl:'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid',
        name: 'Sherri Cronin',
        occupation:'Dynamic Program Designer',
        title:'Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.'
    },
    {
        imgUrl:'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid',
        name: 'Sherri Cronin',
        occupation:'Dynamic Program Designer',
        title:'Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.'
    },
    {
        imgUrl:'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid',
        name: 'Sherri Cronin',
        occupation:'Dynamic Program Designer',
        title:'Inventore vel alias consequatur nihil maiores voluptate enim ea deleniti.'
    }
    
]

export const SERVICES = [
    {
      title: 'Comprehensive Driving ',
      titlePart2: 'Training Services',
      desc: 'We offer professional Auto car and Manual van training, as well as Three-Wheeler and Scooter motorbike training, available for both individuals and groups. Our expert instructors will guide you through the process of obtaining your driving license with confidence.',
      img: img1
    },
    {
      title: 'Theory and Practical ',
      titlePart2: 'Knowledge',
      desc: 'Our training covers all the theoretical knowledge required for safe driving. We ensure that our students understand the rules of the road, traffic regulations, and essential safety practices before they start driving on the road.',
      img: img2
    },
    {
      title: 'Driving License ',
      titlePart2: 'Exam Preparation',
      desc: 'We help students prepare for their driving license exams by focusing on past papers and model papers. Our practice sessions will boost your confidence and ensure a higher chance of success.',
      img: img3
    },
    {
      title: 'Refresher Training ',
      titlePart2: 'for Licensed Drivers',
      desc: 'For those who already have a driving license but need to improve their skills, we offer tailored training programs to enhance your driving abilities and confidence on the road.',
      img: img4
    },
    {
      title: 'Convenience ',
      titlePart2: 'at Your Doorstep',
      desc: 'Enjoy the convenience of onpremises training at your office or home. Our instructors will come to you, saving you time and effort.',
      img: img5
    },
    {
      title: 'Tailor-made ',
      titlePart2: 'Corporate Packages',
      desc: 'We offer special packages for corporate clients, customized to match their specific needs. Whether its for employee training or fleet drivers, we have you covered.',
      img: img6
    },
    {
      title: 'Flexible Learning ',
      titlePart2: 'Hours',
      desc: 'We understand your busy schedule. Therefore, we offer flexible learning hours for both theory and practical sessions, allowing you to learn at your own pace.',
      img: img7
    },
    {
      title: 'Essential Mechanical ',
      titlePart2: 'Knowledge',
      desc: 'Alongside driving skills, we provide essential mechanical knowledge to ensure that you can handle minor vehicle issues confidently during your journeys.',
      img: img8
    },
    {
      title: 'Step-by-Step ',
      titlePart2: 'Course Structure',
      desc: 'Our training is designed to be progressive and easy to follow. We ensure that you learn and master each aspect of driving step-by-step to become a skilled and responsible driver.',
      img: img9
    },
    {
      title: 'Friendly and Supportive ',
      titlePart2: 'Service',
      desc: 'Our team of instructors is friendly, patient, and dedicated to providing the best learning experience. We create a comfortable environment to make your learning journey enjoyable.',
      img: img10
    },
    {
      title: 'Affordable ',
      titlePart2: 'Pricing',
      desc: 'We believe in providing high-quality training at affordable charges. Our competitive pricing ensures that everyone can access our top-notch driving instruction.',
      img: img11
    },
    {
      title: 'Workshops for Government and ',
      titlePart2: 'Private Organizations',
      desc: 'We conduct workshops focusing on essential mechanical knowledge and road rules and regulations for both government and private sector organizations. These workshops promote road safety and responsible driving practices among employees.',
      img: img12
    }
  ]