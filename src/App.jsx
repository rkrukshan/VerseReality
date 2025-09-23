import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Quotes } from './components/Quotes/Quotes'
import Banner from './components/Banner/Banner'

export default function App() {
  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
    </main>
  )
}
