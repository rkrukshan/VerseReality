import React from 'react'
import GooglePlay from '../../assets/images/play_store.png'
import AppStore from '../../assets/images/app_store.png'

export const GetStarted = () => {
    return (
        <div className='container md:w-2xl mx-auto p-9'>
            <h1 className="text-center font-semibold text-3xl mb-9">Getting Started with our App</h1>
            <h1 className="text-center font-semibold text-lg mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, a nobis hic voluptates corrupti ullam ipsam doloribus dolorum,
                soluta rerum dolore. Itaque, doloremq</h1>
            <div className="flex justify-center item-center">
                <img src={GooglePlay} alt="" className='h-16 w-64' />
                <img src={AppStore} alt="" className='h-16 w-64' />
            </div>
        </div>
    )
}
