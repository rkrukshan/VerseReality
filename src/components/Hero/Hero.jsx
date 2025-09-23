import React from 'react'
import HeroPng from '../../assets/images/hero.png'
import { BiPlayCircle } from 'react-icons/bi'

export const Hero = () => {
    return (
        <div className='container w-full mx-auto  py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
            <div className="text-white duration-300 overflow-hidden">
                <div className="container min-h-[700px] flex relative">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10'>
                        <div className='space-y-5 lg:pr-20'>
                            <h1 className='text-4xl font-semibold'>
                                GET READY TO ENJOY VR <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                                    GAMES WITH OUR PLATEFORM
                                </span>
                            </h1>
                            <p className='text-justify tracking-tighter'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Adipisci, aspernatur corrupti velit facilis sint recusandae
                                voluptate sequi optio dolores autem deleniti,
                                quos voluptatum? Porro, numquam! Cum dolorum
                                excepturi modi numquam?
                            </p>
                            <div className='flex gap-6'>
                                <button className='primary-btn'>Get Started</button>
                                <button className='flex items-center gap-2'>
                                    <BiPlayCircle className='text-3xl' />
                                    See Demo
                                </button>
                            </div>
                        </div>

                        <img src={HeroPng} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
