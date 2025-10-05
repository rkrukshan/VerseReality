import React from 'react'
import logo from '../../assets/images/logo.png'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import { DarkMode } from './DarkMode'

const NavLinks = [
  { id: 1, name: 'Home', link: "#" },
  { id: 2, name: 'Products', link: "#" },
  { id: 3, name: 'Pricing', link: "#" },
  { id: 4, name: 'Contact', link: "#" },
]

export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className='container w-full mx-auto relative z-[9999] text-black dark:text-white'>
      <div className='container py-2 md:py-0'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-4'>
          <div className='flex items-center gap-3 justify-center'>
            <img src={logo} alt={logo} className='h-16' />
            <p className='text-center'>
              Verse  <span className='font-bold'>Reality</span>
            </p>
          </div>

          <nav className='hidden md:block'>
            <ul className='flex items-center gap-8 justify-center'>
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className='py-4'>
                  <a href={link} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500 text-center'>{name}</a>
                </li>
              ))}

              <li className='py-4'>
                {/* <DarkMode /> */}
              </li>
            </ul>
          </nav>

          <div className='md:hidden block w-full'>
            <div className="flex justify-center items-center gap-4">
              {/* <DarkMode /> */}

              {
                showMenu ? <HiMenuAlt1 className='cursor-pointer' size={30}
                  onClick={toggleMenu} /> : <HiMenuAlt3 className='cursor-pointer' size={30} onClick={toggleMenu} />
              }
            </div>

            {showMenu && (
              <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
                <ul className='flex flex-col items-center gap-4 py-4'>
                  {NavLinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <a href={link} className='text-xl font-semibold hover:text-primary py-2 transition-colors duration-500'>{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}