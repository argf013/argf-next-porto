'use client'

import { ProjectCard } from '@/components/project/ProjectCard'
import { motion, useAnimation } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ProjectsPage() {
  const projects = [
    {
      image: 'https://i.postimg.cc/vZrhQncW/antholog-home.png',
      title: 'Antholog',
      description:
        'A creative content archive and management platform for users to organize, share, and explore collections efficiently.',
      techstack: [
        { name: 'Next.js' },
        { name: 'TailwindCSS' },
        { name: 'Shadcn UI' },
        { name: 'TypeScript' },
        { name: 'PostgreSQL' },
        { name: 'Google OAuth' },
      ],
      link: 'https://antholog.vercel.app',
    },
    {
      image: 'https://i.postimg.cc/66GzqgPV/yess-home.png',
      title: 'Yess Xpress Landing Page',
      description:
        'Landing page for Yess Xpress, showcasing logistics services, integrated quote request form with Google Sheets & email, multilingual support, and 7 company profile pages.',
      techstack: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'Google Sheets API' },
      ],
      link: 'https://yess-xpress.id',
    },
    {
      image: 'https://i.postimg.cc/MK7CMvLY/slerate-home.png',
      title: 'Slerate Boost Landing Page',
      description:
        'Landing page untuk Slerate Boost, dibuat dengan HTML, CSS, animasi CSS murni, dan JavaScript.',
      techstack: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'CSS Animation' },
        { name: 'JavaScript' },
      ],
      link: 'https://arfa-slerate.netlify.app/',
    },
    {
      image: 'https://i.postimg.cc/x8M1b9rb/mana-blog.png',
      title: 'Mana Blog',
      description:
        'A modern blog platform built with React and Firebase. Features auth, markdown editor, image uploads, comments, and responsive UI/UX.',
      techstack: [
        { name: 'React' },
        { name: 'TailwindCSS' },
        { name: 'Firebase' },
        { name: 'Markdown' },
        { name: 'JavaScript' },
        { name: 'CSS3' },
      ],
      link: 'https://mana-blog.netlify.app/',
    },
    {
      image: 'https://i.postimg.cc/fyT8VRS8/inventaris.png',
      title: 'Inventaris Jaya',
      description:
        'Inventory system for a furniture store. Users can manage stock, view transaction history, check profits, and more.',
      techstack: [
        { name: 'React' },
        { name: 'Firebase' },
        { name: 'TailwindCSS' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
        { name: 'Express' },
      ],
    },
    {
      image: 'https://i.postimg.cc/Sxfb5Db8/mana-manager-netlify-app.png',
      title: 'Mana Manager',
      description:
        'Easily manage your budget with automated daily expenses and balance prediction.',
      techstack: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'PWA' },
        { name: 'IndexedDB' },
      ],
      link: 'https://mana-manager.netlify.app/',
    },
  ]

  return (
    <div
      className='
      flex
      flex-col
      items-center 
      justify-center 
      my-16
      min-h-screen 
      font-[family-name:var(--font-geist-sans)]
    '
    >
      <main className='flex flex-col gap-[32px] justify-center row-start-2 items-center'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-5xl font-semibold text-primary text-center mx-auto'>
            Check out my latest work
          </h1>
          <span className='text-muted-foreground text-sm text-center mx-auto'>
            I've worked on a variety of projects, from simple websites to complex web applications.
            Here are a few of my favorites.
          </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center'>
          {projects.map((project, idx) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, margin: '-50px' })
            return (
              <motion.div
                key={idx}
                ref={ref}
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 40, filter: 'blur(12px)' }
                }
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <ProjectCard {...project} />
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
