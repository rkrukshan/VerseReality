import React from 'react'
import BannerPng from '../../assets/images/banner1.png'
import { BiPlayCircle } from 'react-icons/bi'

const Banner = () => {
    return (
        <div className="py-12 sm:py-0 relative">
            <div className="container min-h-[620px] flex">
                <div className="grid grid-col-1 sm:grid-cols-2 gap-8 place-items-center relative z-10">
                    <div>
                        <img src={BannerPng} alt=""
                            className='w-full max-w-[400px]' />
                    </div>

                    <div>
                        <div className='order-2 sm:order-1 space-y-5 lg:pr-20 '>
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner