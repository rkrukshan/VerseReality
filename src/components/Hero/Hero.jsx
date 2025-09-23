import React from 'react'
import HeroPng from '../../assets/images/hero.png'
import { BiPlayCircle } from 'react-icons/bi'

export const Hero = () => {
    return (
        <div className="w-full mx-auto py-12 dark:bg-black dark:text-white duration-300 overflow-hidden">
            <div className="min-h-[700px] max-w-7xl mx-auto flex relative px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
                    
                    <div className="order-2 sm:order-1 space-y-5 lg:pr-20">
                        <h1 className="text-4xl font-semibold leading-snug">
                            GET READY TO ENJOY VR{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                GAMES WITH OUR PLATFORM
                            </span>
                        </h1>
                        <p className="text-justify tracking-tight">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Adipisci, aspernatur corrupti velit facilis sint recusandae
                            voluptate sequi optio dolores autem deleniti,
                            quos voluptatum? Porro, numquam! Cum dolorum
                            excepturi modi numquam?
                        </p>
                        <div className="flex gap-6">
                            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:opacity-90">
                                Get Started
                            </button>
                            <button className="flex items-center gap-2 text-primary hover:text-secondary duration-300">
                                <BiPlayCircle className="text-3xl" />
                                See Demo
                            </button>
                        </div>
                    </div>

                    <div className="order-1 sm:order-2">
                        <img 
                            src={HeroPng} 
                            alt="Hero VR" 
                            className="max-h-[600px] max-w-[600px] w-full object-contain" 
                        />
                    </div>
                </div>

                <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animate-pulse opacity-40"></div>
            </div>
        </div>
    )
}
