'use client'

import React, { useState } from 'react'
import { 
  SiGithub, 
  SiMinutemailer, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiGit, 
  SiSquare
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
    <footer className='bg-transparent text-white py-10 border-t border-gray-800'>
      <div className='container mx-auto px-4 md:px-6 max-w-6xl'>
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
                  className='w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-white'
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
                  className='w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-white'
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
                  className='w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-white'
                  placeholder='Your message...'
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-200 font-medium disabled:opacity-70 flex items-center justify-center'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className='text-green-400 mt-2'>Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className='text-red-400 mt-2'>Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <SiMinutemailer size={20} className='text-[#EEE7DD]' />
                  <a
                    href='mailto:alghi344@gmail.com'
                    className='hover:text-blue-400 transition-colors'
                  >
                    alghi344@gmail.com
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <SiSquare size={20} className='text-[#EEE7DD]' />
                  <a
                    href='https://www.linkedin.com/in/muhamad-arfa-alghiffari-706419208/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-blue-400 transition-colors'
                  >
                    linkedin.com/in/muhamad-arfa
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <SiGithub size={20} className='text-[#EEE7DD]' />
                  <a
                    href='https://github.com/argf013'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-blue-400 transition-colors'
                  >
                    github.com/arfaalghiffari
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-bold mb-2'>Skills & Technologies</h2>
              <div className='grid grid-cols-2 gap-2 text-gray-300'>
                <div>
                  <ul className='space-y-1'>
                    <li className='flex items-center space-x-2'>
                      <SiReact size={16} className="text-[#61DAFB]" />
                      <span>React / Next.js</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <SiTypescript size={16} className="text-[#3178C6]" />
                      <span>TypeScript</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <SiNodedotjs size={16} className="text-[#339933]" />
                      <span>Node.js</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='space-y-1'>
                    <li className='flex items-center space-x-2'>
                      <SiTailwindcss size={16} className="text-[#06B6D4]" />
                      <span>TailwindCSS</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <SiPostgresql size={16} className="text-[#4169E1]" />
                      <span>PostgreSQL</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <SiGit size={16} className="text-[#F05032]" />
                      <span>Git/GitHub</span>
                    </li>
                  </ul>
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
