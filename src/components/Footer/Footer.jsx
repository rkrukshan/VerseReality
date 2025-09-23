import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import { LiaLocationArrowSolid } from 'react-icons/lia'
import { TiLocationArrow } from 'react-icons/ti'

const Footer = () => {
    const users = [
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
                    <p className="text-sm text-justify tracking-tighter">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Incidunt modi fugit et iure saepe eos corporis iusto natus
                        ullam dolore delectus, officiis possimus facere minima
                        nobis porro! Voluptate, aliquid aliquam?</p>
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
                        {users.map((user) => (
                            <li
                                key={user.id}
                                className="list-none text-sm my-5 hover:text-blue-600 cursor-pointer" >
                                <div className="flex">
                                    <div className='rotate-90 pr-3' ><LiaLocationArrowSolid /></div><div>{user.name}</div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>



                <div className="grid m-9">
                    <h1 className="font-bold text-xl">Important Links</h1>

                    <ul className="mt-2">
                        {users.map((user) => (
                            <li
                                key={user.id}
                                className="list-none text-sm my-5 hover:text-blue-600 cursor-pointer" >
                                <div className="flex">
                                    <div className='rotate-90 pr-3' ><LiaLocationArrowSolid /></div><div>{user.name}</div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="grid m-9">
                    <h1 className="font-bold text-xl">Important Links</h1>

                    <ul className="mt-2">
                        {users.map((user) => (
                            <li
                                key={user.id}
                                className="list-none text-sm my-5 hover:text-blue-600 cursor-pointer" >
                                <div className="flex">
                                    <div className='rotate-90 pr-3' ><LiaLocationArrowSolid /></div><div>{user.name}</div>

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