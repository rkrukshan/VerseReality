import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'

export default function App() {
  return (
    <main className='overflow-x-hidden bg-white dark:bg-black'>
      <Navbar/>
      <Hero/>
    </main>
  )
}
