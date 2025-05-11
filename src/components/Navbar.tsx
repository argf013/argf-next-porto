'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import argfLogo from '../../public/argf.svg'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const leftNavItems = [
    { label: 'Blog', path: '/blog' },
    { label: 'Experience', path: '/experience' },
  ]

  const rightNavItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'Pixel Gallery', path: '/pixel-gallery' },
  ]
  const renderNavItems = (items: { label: string; path: string }[]) =>
    items.map(item => (
      <li key={item.path} className={isMobile ? 'w-full text-center py-2' : ''}>
        <Link
          href={item.path}
          className={`px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === item.path
              ? 'bg-black/[.05] dark:bg-white/[.06] font-medium'
              : 'hover:bg-black/[.03] dark:hover:bg-white/[.03]'
          } ${isMobile ? 'block w-full' : ''}`}
          onClick={() => isMobile && setIsMenuOpen(false)}
          prefetch={true}
        >
          {item.label}
        </Link>
      </li>
    ))

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 h-[100px] flex items-center bg-transparent backdrop-blur-md border-b border-black/[.08] dark:border-white/[.12]'>
      <div className='w-full max-w-6xl mx-auto px-4 flex items-center justify-between md:justify-center h-full'>
        <button
          className='md:hidden flex items-center transition-transform duration-300 ease-in-out hover:scale-110'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='transform rotate-0 transition-transform duration-300'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='transform rotate-0 transition-transform duration-300'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          )}
        </button>

        <div className={`flex items-center ${isMobile ? 'justify-center' : ''}`}>
          <Link href='/' className='font-semibold'>
            <Image src={argfLogo} alt='ARGF Logo' className='h-[60px] w-auto block md:hidden' />
          </Link>
        </div>

        <ul className='hidden md:flex items-center space-x-6 h-full'>
          {renderNavItems(leftNavItems)}

          <li className='mx-4'>
            <Link href='/' className='font-semibold'>
              <Image src={argfLogo} alt='ARGF Logo' className='h-[70px] w-auto' />
            </Link>
          </li>

          {renderNavItems(rightNavItems)}
        </ul>
        <div className='md:hidden w-6'></div>
      </div>

      <div
        className={`md:hidden bg-[#0A0A0A] backdrop-blur-2xl absolute top-[100px] left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='bg-[#0A0A0A] backdrop-blur-md pt-2 pb-4'>
          <ul className='flex flex-col items-center space-y-1'>
            {renderNavItems([...leftNavItems, ...rightNavItems])}
          </ul>
        </div>
      </div>
    </nav>
  )
}
