import React from 'react'
import blogImage from '../assets/blog-image.png'
import { FaShare, FaUser } from 'react-icons/fa'
import { CiShare2 } from "react-icons/ci";
import { motion } from 'framer-motion'
type BlogPost = {
    title: string;
    author: string;
    date: string;
    shares: string;
    content: string;
    link: string;
};

type Props = {
    blog?: BlogPost
    className?: string
}

function BlogCard({ blog, className }: Props) {
    return (
        <motion.div className={`w-full text-white bg-black flex items-stretch md:flex-col ${className}`}
            whileInView={{ rotateX: 0, opacity: 1 }}
            initial={{ rotateX: 90, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, border: '2px solid white' }}
            style={{ perspective: 1000 }}
        >
            <div className='w-1/4 md:w-full'>
                <img src={blogImage} className='w-full h-full object-cover md:object-contain' />
            </div>
            <div className='px-2 py-4 flex flex-col items-center space-y-2 md:space-y-5 w-3/4 md:w-full'>
                <h2 className='text-center text-lg md:text-xl lg:text-2xl mb-2'>Integer Maecenas Eget Viverra</h2>
                <div>
                    <div className='flex items-center justify-between gap-1 md:gap-2  text-xs md:text-sm'>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <div>
                                <FaUser />
                            </div>
                            <h6>{blog?.author || 'Joanna Wellick'}</h6>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <div className='w-10 p-[2px] bg-slate-400'>
                            </div>
                            <h6>{blog?.date || 'June 28, 2018'}</h6>
                        </div>
                        <div className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-gray-400'>
                            <div className=''>
                                <CiShare2 />
                            </div>
                            <h6>{blog?.shares || '1K shares'}</h6>
                        </div>
                    </div>

                    <p className='text-xs mt-6'>
                        {blog?.content}
                    </p>
                </div>

                <button className='mx-auto w-max border-b-2 border-white text-sm md:text-xl hover:text-amber-400 hover:border-amber-400'>View Post</button>
            </div>
        </motion.div>
    )
}

export default BlogCard