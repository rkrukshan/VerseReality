import React from 'react'
import HeroPng from '../../assets/images/hero.png'
import { BiPlayCircle } from 'react-icons/bi'
import { motion } from "framer-motion";



const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
    },
};

export const Hero = ({ togglePlay }) => {
    return (
        <div className="w-full mx-auto py-12 dark:bg-black dark:text-white duration-300 overflow-hidden">
            <div className="min-h-[700px] max-w-7xl mx-auto flex relative px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">

                    <div className="order-2 sm:order-1 space-y-5 lg:pr-20">
                        <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1.5 }} className="text-4xl font-semibold leading-snug">
                            GET READY TO ENJOY VR{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                GAMES WITH OUR PLATFORM
                            </span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                            className="text-justify tracking-tight">
                            Welcome to VerseReality where imagination meets innovation.
                            We craft immersive Virtual Reality experiences that transport you beyond the screen—whether it’s gaming, education, business, or exploration.
                        </motion.p>
                        <div className="flex gap-6">
                            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:opacity-90">
                                Get Started
                            </button>
                            <button onClick={togglePlay} className="flex items-center gap-2 text-primary hover:text-secondary duration-300">
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
