import React, { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Quotes } from './components/Quotes/Quotes'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Card from './components/Card/Card'
import { GetStarted } from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
import PopupPlayer from './components/PopupPlayer/PopupPlayer'

export default function App() {
  const [isPlay, setIsplay] = useState(false);

  const togglePlay = () => {
    setIsplay(!isPlay);
  }

  return (
    <main className='overflow-hidden bg-white dark:bg-black text-black dark:text-white '>
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Card />
      <GetStarted />
      <Footer />
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </main>
  )
}
