import Image from 'next/image'
import arfaProfile from '../../public/arfa-profile.png'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] relative'>
      <div className='absolute top-0 right-0 lg:top-[-100px] lg:right-0 block'>
        <Image
          src='/seq-keys.webp'
          alt='Floating keycaps animation'
          width={600}
          height={600}
          unoptimized
        />
      </div>

      <section className='mx-auto flex flex-row items-center mt-10 p-[64px] md:px-[200px] gap-[40px] w-full md:w-[1280px] h-[392px] relative z-10'>
        <div className='flex flex-col gap-[20px]'>
          <h1 className='text-4xl font-bold mt-25 md:mt-0'>Hi There!</h1>
          <div className='flex flex-col gap-2'>
            <p className='text-xl max-w-2xl text-justify md:text-left'>
              Introduce myself Muhamad Arfa Alghiffari, a beginner in Web Development with a focus
              on Frontend and Backend development. With an educational background from Politeknik
              Negeri Media Kreatif Jakarta, I aim to continuously hone my web technology skills to
              deliver the best in project development.
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
        <div
          className='hidden md:block h-[250px] w-[250px] rounded-full overflow-hidden flex-shrink-0'
          style={{
            filter:
              'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.2))',
          }}
        >
          <Image
            className='object-cover w-full h-full'
            src={arfaProfile}
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
