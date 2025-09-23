import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Quotes } from './components/Quotes/Quotes'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Choose from './components/choose/Choose'
import { GetStarted } from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <main className='overflow-hidden bg-white dark:bg-black text-black dark:text-white '>
      <Navbar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Choose />
      <GetStarted />
      <Footer />
    </main>
  )
}
