import React from 'react';
import BannerPng2 from '../../assets/images/banner2.png';
import { BiPlayCircle } from 'react-icons/bi';
import { motion } from "framer-motion";


const Banner2 = ({togglePlay}) => {
    return (
        <div className="container mx-auto py-12 sm:py-0 relative">
            <div className="min-h-[620px] flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-items-center text-center sm:text-left relative z-10 w-full">

                    <div className="space-y-5 lg:pr-20 relative flex flex-col items-center text-center w-full max-w-2xl">
                        <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1.5 }} className="text-4xl font-semibold">
                            GET READY TO ENJOY VR
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary block">
                                GAMES WITH OUR PLATFORM
                            </span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", duration: 0.4, bounce: 0.5 },
                            }}
                            viewport={{ once: true, amount: 0.2 }} className="text-center tracking-tighter max-w-[500px] mx-auto">
                            Step into VerseReality VR Games, where reality ends and imagination takes over.
                            Feel the thrill of battle, explore fantasy worlds, and experience gaming like never before—all in full immersion.
                        </motion.p>
                        <div className="flex gap-6 justify-center">
                            <button className="primary-btn">Get Started</button>
                            <button onClick={togglePlay} className="flex items-center gap-2">
                                <BiPlayCircle className="text-3xl" />
                                See Demo
                            </button>
                        </div>

                        <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary
                            to-secondary rounded-full absolute bottom-[-15px] left-1/2 -translate-x-1/2 blur-3xl opacity-50
                            animated-wrapper">
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <img src={BannerPng2} alt="VR gaming banner" className="w-full max-w-[400px] mx-auto" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner2;