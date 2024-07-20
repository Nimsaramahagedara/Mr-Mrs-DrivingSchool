import React from 'react'
import Container from '../components/Container'

type Props = {}

function NewsLetter({ }: Props) {
    return (
        <section className={`relative bg-[#050A1E]`}>
            <div className={`w-full h-96 bg-white rounded-br-[50px] lg:rounded-br-[250px] rounded-tl-[50px] lg:rounded-tl-[15vw] overflow-hidden flex items-center justify-center`}>
                <div className='w-full xl:w-2/3 mx-auto'>
                    <div className='flex items-center justify-between bg-amber-400 p-3'>
                        Subscribe to our Newsletter
                        <div>
                            <input type="text" className='p-3 bg-white rounded-full' placeholder='Enter Email' />
                            <button className='p-3 bg-amber-500 text-white rounded-full'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NewsLetter