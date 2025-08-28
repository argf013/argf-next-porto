'use client'

import React, { useState } from 'react'
import {
  SiGithub
} from '@icons-pack/react-simple-icons'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)

      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  return (
    <footer className='bg-transparent text-white py-8 border-t border-gray-800'>
      <div className='container mx-auto px-8 md:px-6 max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition text-white'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition text-white'
                  placeholder='your.email@example.com'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-1'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className='w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 outline-none transition text-white'
                  placeholder='Your message...'
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-white hover:bg-gray-200 cursor-pointer text-black py-2 px-6 rounded-md transition duration-200 font-medium disabled:opacity-70 flex items-center justify-center'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className='text-gray-300 mt-2'>Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className='text-gray-400 mt-2'>Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <svg
                    fill='#EEE7DD'
                    className='h-5.5 w-5.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z'></path>
                  </svg>
                  <a
                    href='mailto:alghi344@gmail.com'
                    className='hover:text-gray-300 transition-colors'
                  >
                    alghi344@gmail.com
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path
                      fill='#EEE7DD'
                      d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                    ></path>
                  </svg>
                  <a
                    href='https://www.linkedin.com/in/muhamad-arfa-alghiffari-706419208/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-gray-300 transition-colors'
                  >
                    Muhamad Arfa Alghiffari
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <SiGithub size={20} className='text-[#EEE7DD]' />
                  <a
                    href='https://github.com/argf013'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-gray-300 transition-colors'
                  >
                    argf013
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm'>
          <p>© {new Date().getFullYear()} Muhamad Arfa Alghiffari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
