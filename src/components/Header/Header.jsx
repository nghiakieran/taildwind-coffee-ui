import React, { useEffect, useState } from 'react'
import Item from './Item'

const items = [
  'home',
  'our products',
  'blog',
  'about',
  'contact',
  'styleguide'
]
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggleMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)

  }

  useEffect(() => {
    const handleClickOutside = () => setIsMenuOpen(false);

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className='max-w-[66%] md:mx-auto mobile:mx-auto py-6 lg:px-0'>
      <nav className=' flex justify-between items-center relative lg:gap-3 gap-2'>
        <a className="basis-1/6 cursor-pointer text-xl font-semibold hover:text-gray-700">CoffeeStyle.</a>
        <div className={`basis-4/6 lg:flex lg:gap-2  tracking-widest lg:justify-between text-xs uppercase text-gray-500 font-medium
           ${isMenuOpen ? "lcn-menu-open" : "hidden"}`}
        >
          {items.map(item => {
            return (
              <Item key={item} item={item} /> 
            )
          })} 
        </div>
        <div className="basis-4/6 lg:basis-1/6 py-1 cursor-pointer  hover:text-slate-950 flex justify-end lg:justify-end  items-center uppercase text-gray-500 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lcn-icon mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span className='mx-1 text-xs tracking-widest '>cart</span>
          <span className='lcn-badge-circle text-xs bg-orange-400 ml-2 text-white'>10</span>
        </div>
        <div className='lg:hidden basis-1/6 flex items-center justify-end sm:px-8' >
          <svg onClick={handleToggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='lcn-icon  cursor-pointer'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Header
