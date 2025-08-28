import Image from 'next/image'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] relative'>
      <section className='mx-auto flex flex-row items-center mt-10 p-[64px] md:px-[200px] gap-[40px] w-full md:w-[1280px] h-[392px] relative z-10'>
        <div className='flex flex-col gap-[20px]'>
          <h1 className='text-4xl font-bold mt-25 md:mt-0'>Hi There!</h1>
          <div className='flex flex-col gap-2'>
            <p className='text-xl max-w-2xl text-justify md:text-left'>
              Introduce myself Muhamad Arfa Alghiffari, in Web Development with a focus on Frontend
              and Backend development. With an educational background from Politeknik Negeri Media
              Kreatif Jakarta, I aim to continuously hone my web technology skills to deliver the
              best in project development.
            </p>
            <a
              href='/CV_Muhamad_Arfa_Alghiffari(2025).pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='border-2 border-dashed mx-auto md:mx-0 border-white text-white font-medium py-2 px-4 rounded-full hover:bg-white hover:text-black transition-colors w-fit mt-2'
            >
              Checkout my resume
            </a>
          </div>
        </div>
        <div className='hidden md:block h-[250px] w-[250px] rounded-full overflow-hidden flex-shrink-0'>
          <Image
            className='object-cover w-full h-full'
            src={'https://i.postimg.cc/MH1zGwN3/arfa.png'}
            alt="Arfa's profile picture"
            width={300}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <TechStack />
    </div>
  )
}
