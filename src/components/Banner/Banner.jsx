import React from 'react'
import BannerPng from '../../assets/images/banner1.png'
import { BiPlayCircle } from 'react-icons/bi'
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <div className="container mx-auto py-12 sm:py-0 relative">
            <div className="container min-h-[620px] flex">
                <div className="grid grid-col-1 sm:grid-cols-2 gap-8 place-items-center relative z-10">
                    <div>
                        <img src={BannerPng} alt=""
                            className='w-full max-w-[400px]' />
                    </div>

                    <div>
                        <div className='order-2 sm:order-1 space-y-5 lg:pr-20 relative'>
                            <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -100 }}
                                transition={{ duration: 1.5 }} className='text-4xl font-semibold'>
                                GET READY TO ENJOY VR <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                                    EDUCATION WITH OUR PLATEFORM
                                </span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", duration: 0.4, bounce: 0.5 },
                                }}
                                viewport={{ once: true, amount: 0.2 }} className='text-justify tracking-tighter'>
                                Welcome to Metaverse VR Education, where classrooms break free from walls.
                                Through immersive Virtual Reality learning, students don’t just read about history—they walk through it. They don’t just imagine science—they experiment inside it.
                            </motion.p>
                            <div className='flex gap-6'>
                                <button className='primary-btn'>Get Started</button>
                                <button className='flex items-center gap-2'>
                                    <BiPlayCircle className='text-3xl' />
                                    See Demo
                                </button>
                            </div>
                            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary
                                 to-secondary rounded-full absolute bottom-[-15px] left-[300px] blur-3xl opacity-50
                                  animated-wrapper">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner