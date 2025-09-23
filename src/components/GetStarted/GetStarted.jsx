import React from 'react'
import GooglePlay from '../../assets/images/play_store.png'
import AppStore from '../../assets/images/app_store.png'
import { motion } from "framer-motion";


export const GetStarted = () => {
    return (
        <div className='container md:w-2xl mx-auto p-9'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }} className="text-center font-semibold text-3xl mb-9">Getting Started with our App</motion.h1>
            <motion.p initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", duration: 0.4, bounce: 0.5 },
                }}
                viewport={{ once: true, amount: 0.2 }} className="text-center font-semibold text-lg mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, a nobis hic voluptates corrupti ullam ipsam doloribus dolorum,
                soluta rerum dolore. Itaque, doloremq</motion.p>
            <div className="flex justify-center item-center">
                <img src={GooglePlay} alt="" className='h-20 w-72' />
                <img src={AppStore} alt="" className='h-20 w-72' />
            </div>
        </div>
    )
}
