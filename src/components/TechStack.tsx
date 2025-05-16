'use client'

import styles from '../app/index.module.css'
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiCypress,
  SiExpress,
  SiVite,
  SiWebpack,
} from '@icons-pack/react-simple-icons'

const techStackItems = [
  { Icon: SiReact, hoverColor: 'hover:text-blue-500' },
  { Icon: SiHtml5, hoverColor: 'hover:text-orange-500' },
  { Icon: SiCss3, hoverColor: 'hover:text-blue-600' },
  { Icon: SiJavascript, hoverColor: 'hover:text-yellow-400' },
  { Icon: SiVuedotjs, hoverColor: 'hover:text-green-500' },
  { Icon: SiTypescript, hoverColor: 'hover:text-blue-700' },
  { Icon: SiTailwindcss, hoverColor: 'hover:text-cyan-500' },
  { Icon: SiNodedotjs, hoverColor: 'hover:text-green-600' },
  { Icon: SiCypress, hoverColor: 'hover:text-green-400' },
  { Icon: SiExpress, hoverColor: 'hover:text-gray-500' },
  { Icon: SiVite, hoverColor: 'hover:text-purple-500' },
  { Icon: SiWebpack, hoverColor: 'hover:text-blue-300' },
]

// Component to render a single tech stack item
const TechStackItem = ({ Icon, hoverColor }: { Icon: React.ComponentType<{ size: number, className: string }>, hoverColor: string }) => (
  <div className='flex flex-col items-center gap-2'>
    <Icon size={80} className={`${hoverColor} transition-colors`} />
  </div>
)

export default function TechStack() {
  return (
    <section className='px-4 md:px-[100px] mt-15 md:mt-0 py-[80px] w-full md:w-[1280px] mx-auto flex flex-col gap-[40px] overflow-hidden'>
      <span className='font-bold text-[30px] text-center'>Tech Stack</span>

      <div className={styles.techMarquee}>
        <div className={styles.techTrack}>
          <div className={`flex flex-row gap-[60px] ${styles.techContent}`}>
            {techStackItems.map((item, index) => (
              <TechStackItem key={`tech-1-${index}`} Icon={item.Icon} hoverColor={item.hoverColor} />
            ))}
          </div>
          <div className={`flex flex-row gap-[60px] ${styles.techContent}`}>
            {techStackItems.map((item, index) => (
              <TechStackItem key={`tech-2-${index}`} Icon={item.Icon} hoverColor={item.hoverColor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
