import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { LuNotebookPen } from 'react-icons/lu'
import { PiNotePencilBold } from 'react-icons/pi'

const Choose = () => {
    return (
        <div className='container w-full mx-auto p-9'>
            <h1 className="font-semibold text-3xl text-center mb-6">Why Choose Us</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-9'>
                    <div className="shadow-lg shadow-gray-400 cursor-pointer flex flex-col items-center justify-center text-center bg-slate-900 w-80 h-80 p-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary transition-colors duration-500">
                        <div className="mb-4">
                            <FaCamera className='text-blue-500 text-4xl' />
                        </div>
                        <h3 className="text-white text-lg font-medium mb-2">Captivating Videos</h3>
                        <h4 className="text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <h5 className="text-blue-400 text-sm font-medium cursor-pointer hover:text-blue-300 transition-colors">Learn More</h5>
                    </div>

                    <div className="shadow-lg shadow-gray-400 cursor-pointer flex flex-col items-center justify-center text-center bg-slate-900 w-80 h-80 p-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary transition-colors duration-500">
                        <div className="mb-4">
                            <LuNotebookPen className='text-blue-500 text-4xl' />
                        </div>
                        <h3 className="text-white text-lg font-medium mb-2">Safe Transactions</h3>
                        <h4 className="text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <h5 className="text-blue-400 text-sm font-medium cursor-pointer hover:text-blue-300 transition-colors">Learn More</h5>
                    </div>

                    <div className="shadow-lg shadow-gray-400 cursor-pointer flex flex-col items-center justify-center text-center bg-slate-900 w-80 h-80 p-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary transition-colors duration-500">
                        <div className="mb-4">
                            <PiNotePencilBold className='text-blue-500 text-4xl' />
                        </div>
                        <h3 className="text-white text-lg font-medium mb-2">Experience Reality</h3>
                        <h4 className="text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                        <h5 className="text-blue-400 text-sm font-medium cursor-pointer hover:text-blue-300 transition-colors">Learn More</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose