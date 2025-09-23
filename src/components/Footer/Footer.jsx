import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import { LiaLocationArrowSolid } from 'react-icons/lia'
import { TiLocationArrow } from 'react-icons/ti'
import { motion } from "framer-motion";


const Footer = () => {
    const links = [
        { id: 1, name: "Home" },
        { id: 2, name: "About" },
        { id: 3, name: "Contact" },
        { id: 4, name: "Blog" }
    ];
    return (
        <div className="container w-full mx-auto p-9 bg-gray-900 rounded-tl-3xl">
            <div className="w-7xl container mx-auto">
                <div className="grid md:grid-cols-4">
                    <div className="grid items-start">
                        <h1 className="font-bold text-3xl my-2 tracking-tighter">MetaVerse</h1>
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", duration: 0.4, bounce: 0.5 },
                            }}
                            viewport={{ once: true, amount: 0.2 }} className="text-sm text-justify tracking-tighter">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Incidunt modi fugit et iure saepe eos corporis iusto natus
                            ullam dolore delectus, officiis possimus facere minima
                            nobis porro! Voluptate, aliquid aliquam?</motion.p>
                        <p className="flex text-lg items-center tracking-tighter my-2">
                            <span className='mr-3'><CiLocationArrow1 /></span>
                            <span>Jaffna Srilanka.</span>
                        </p>

                        <p className="flex text-lg items-center tracking-tighter my-2">
                            <span className='mr-3'><IoIosPhonePortrait /></span>
                            <span>+94765879658</span>
                        </p>
                        <div className='flex text-2xl mt-3 space-x-4'>
                            <p className='flex mx-3'>
                                <FaLinkedin />
                            </p>

                            <p className=' mx-3'>
                                <FaFacebook />
                            </p>

                            <p className=' mx-3'>
                                <FaInstagram />

                            </p>
                        </div>
                    </div>
                    <div className="grid m-9">
                        <h1 className="font-bold text-xl">Important Links</h1>

                        <ul className="mt-2">
                            {links.map((link) => (
                                <li
                                    key={link.id}
                                    className="list-none text-sm my-5 hover:text-blue-300 cursor-pointer" >
                                    <div className="flex items-center">
                                        <div className='rotate-90 pr-3' ><LiaLocationArrowSolid /></div><div>{link.name}</div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>



                    <div className="grid m-9">
                        <h1 className="font-bold text-xl">Important Links</h1>

                        <ul className="mt-2">
                            {links.map((link) => (
                                <li
                                    key={link.id}
                                    className="list-none text-sm my-5 hover:text-blue-300 cursor-pointer" >
                                    <div className="flex items-center">
                                        <div className='rotate-90 pr-3' ><LiaLocationArrowSolid /></div><div>{link.name}</div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="grid m-9">
                        <h1 className="font-bold text-xl">Important Links</h1>

                        <ul className="mt-2">
                            {links.map((link) => (
                                <li
                                    key={link.id}
                                    className="list-none text-sm my-5 hover:text-blue-300 cursor-pointer" >
                                    <div className="flex items-center">
                                        <div className='rotate-90 pr-3' ><LiaLocationArrowSolid /></div>
                                        <div>{link.name}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer