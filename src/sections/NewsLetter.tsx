import stop from '../assets/stop.png'
import RotatingSquare from '../components/RotatingSquare'

type Props = {}

function NewsLetter({ }: Props) {
    return (
        <section className='relative bg-[#050A1E] w-full overflow-x-hidden overflow-y-visible'>
            <div className={`w-full h-96 bg-white rounded-br-[50px] lg:rounded-br-[250px] rounded-tl-[50px] lg:rounded-tl-[15vw] overflow-x-hidden overflow-y-visible flex items-center justify-center`}>
                <img src={stop} alt="stop" className='w-20 xl:w-52 absolute top-2 left-20 z-0 ' />
                <RotatingSquare className='md:-top-20 right-0'/>
                <div className='w-full px-10 xl:px-0 xl:w-2/3 mx-auto'>
                    <div className='flex flex-col md:flex-row items-center justify-between bg-amber-400 py-10 text-white px-5 rounded-sm gap-3 md:gap-0'>
                        <span className='text-xl xl:text-3xl w-full'>Subscribe to our Newsletter</span>
                        <div className='w-full relative'>
                            <input type="text" className='px-4 py-4 bg-white rounded-full w-full' placeholder='Enter Email' />
                            <button className='px-6 py-2 bg-amber-400 text-white rounded-full absolute top-1/2 right-3 -translate-y-1/2'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NewsLetter