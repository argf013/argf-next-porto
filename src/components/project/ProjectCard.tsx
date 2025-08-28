import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, ArrowUpRight } from 'lucide-react'

type TechStackItem = {
  name: string
}

type ProjectCardProps = {
  image: string
  title: string
  description: string
  techstack: TechStackItem[]
  link?: string
  linkLabel?: string
}

export function ProjectCard({
  image,
  title,
  description,
  techstack,
  link,
  linkLabel = 'Preview',
}: ProjectCardProps) {
  return (
    <div className='bg-[#0a0a0a] flex items-center justify-center rounded-md'>
      <Card className='gap-1 shadow-xl overflow-hidden max-w-[18rem] w-full rounded-md border border-white/20 h-[370px] flex flex-col'>
        <div className='relative w-full aspect-video bg-[#0a0a0a] group'>
          <a href={link} target='_blank' rel='noopener noreferrer' className='block w-full h-full'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover object-top w-full h-full'
              priority
              sizes='(max-width: 768px) 100vw, 288px'
            />
            {link && (
              <div className='absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200'>
                <span className='flex items-center text-white font-medium text-sm underline'>
                  Preview <ArrowUpRight size={16} />
                </span>
              </div>
            )}
          </a>
        </div>
        <CardContent className='py-2 px-3 flex flex-col flex-1'>
          <h2 className='text-white text-base font-semibold mb-1'>{title}</h2>
          <p className='text-gray-400 text-xs leading-snug mb-2 flex-1'>{description}</p>
          <div className='flex flex-wrap gap-1 mb-2'>
            {techstack.map((item, idx) => (
              <span
                key={idx}
                className='bg-white/10 text-gray-200 text-[11px] px-1.5 py-0.5 rounded-sm'
              >
                {item.name}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center mt-auto'
            >
              <button className='bg-white hover:bg-white/80 cursor-pointer text-black font-medium py-1 px-2 rounded-sm flex items-center space-x-1 transition duration-200 ease-in-out text-xs border border-gray-700'>
                <Globe size={14} />
                <span>{linkLabel}</span>
              </button>
            </a>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectCard
