import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `relative group px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
      isActive 
        ? 'text-blue-600' 
        : 'text-gray-700 hover:text-blue-600'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-3 py-2 text-base font-semibold tracking-wide transition-colors duration-200 ${
      isActive 
        ? 'text-blue-600 bg-blue-50' 
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
          {/* Logo */}
          <Link 
            to='/client/home' 
            className='flex-shrink-0 hover:scale-105 transition-transform duration-200'
            onClick={closeMobileMenu}
          >
            <img 
              src="/Logo.jpg" 
              alt="Logo" 
              className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-md object-cover' 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className='hidden lg:flex space-x-8'>
            <li>
              <NavLink 
                to='/client/home'
                className={navLinkClass}
              >
                HOME
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/client/blog'
                className={navLinkClass}
              >
                BLOG
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/client/packages'
                className={navLinkClass}
              >
                PACKAGES
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/client/contact'
                className={navLinkClass}
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/client/about'
                className={navLinkClass}
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </NavLink>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button 
              onClick={toggleMobileMenu}
              className='text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200 p-2'
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 border-t border-gray-200' 
          : 'max-h-0 opacity-0'
      } overflow-hidden bg-white`}>
        <div className='px-4 py-2 space-y-1'>
          <NavLink 
            to='/client/home'
            className={mobileNavLinkClass}
            onClick={closeMobileMenu}
          >
            HOME
          </NavLink>
          <NavLink 
            to='/client/blog'
            className={mobileNavLinkClass}
            onClick={closeMobileMenu}
          >
            BLOG
          </NavLink>
          <NavLink 
            to='/client/packages'
            className={mobileNavLinkClass}
            onClick={closeMobileMenu}
          >
            PACKAGES
          </NavLink>
          <NavLink 
            to='/client/contact'
            className={mobileNavLinkClass}
            onClick={closeMobileMenu}
          >
            CONTACT
          </NavLink>
          <NavLink 
            to='/client/about'
            className={mobileNavLinkClass}
            onClick={closeMobileMenu}
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar