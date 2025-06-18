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
  SiWebpack,
  SiPhp,
  SiGoogleappsscript,
} from '@icons-pack/react-simple-icons'
import Image from 'next/image'

export default function ExperiencePage() {
  const frontendSkills = [
    'Experienced in HTML, CSS, JavaScript, and TypeScript for building interactive and scalable web applications.',
    'Experienced in React.js, Vue.js, Bootstrap, and Tailwind for responsive UI development.',
    'Understand responsive web design principles and implementation without UI frameworks.',
    'Familiar with Progressive Web App (PWA) concepts, including service worker registration, caching strategies, and offline support.',
    'Familiar with testing frameworks like Jest and Cypress for automated testing.',
    'Implementing Webpack for module bundling and optimization.',
  ]

  const backendSkills = [
    'Experienced in building RESTful APIs using Node.js, Express, and Hapi.',
    'Proficient in PHP and MySQL for database management.',
    'Implementing authentication and authorization for secure web applications.',
  ]

  const versionControlSkills = ['Git & GitHub for collaborative development and version control.']

  const education = [
    {
      school: 'Jakarta State Polytechnic of Creative Media',
      department: 'Department of Design. Study Program in Multimedia Engineering Technology.',
      period: 'Jakarta, Indonesia 2020 - 2024. GPA (3.6)',
      logo: 'https://infectionstudio.com/wp-content/uploads/2019/08/07_Polimedia.png',
    },
  ]

  const experiences = [
    {
      title: 'BRILiaN Internship Program (BIP) - PT Bank Rakyat Indonesia Tbk',
      stackUsed: [
        { icon: <SiJavascript size={16} />, label: 'JavaScript' },
        { icon: <SiHtml5 size={16} />, label: 'HTML5' },
        { icon: <SiCss3 size={16} />, label: 'CSS3' },
        { icon: <SiGoogleappsscript size={16} />, label: 'Google Apps Script' },
      ],
      period: 'October 2024 - May 2025',
      responsibilities: [
        'Developed a web-based OCR system to scan receipts and extract transaction data.',
        'Integrated extracted data into an Spreadsheet verification system for BRI transactions.',
        'Developed a JavaScript shortcut script to improve business process modeling web based software.',
      ],
    },
    {
      title: 'Frontend Web Developer (Internship) - PT Angkasa Defender Indonesia',
      stackUsed: [
        { icon: <SiVuedotjs size={16} />, label: 'Vue.js' },
        { icon: <SiTypescript size={16} />, label: 'TypeScript' },
        { icon: <SiTailwindcss size={16} />, label: 'TailwindCSS' },
        { icon: <SiCypress size={16} />, label: 'Cypress' },
      ],
      period: 'August - September 2024',
      responsibilities: [
        'Converted designs from Figma into a functional website.',
        'Collaborated with the backend team to integrate APIs.',
        'Utilized Vue.js as the frontend framework with TypeScript.',
        'Implemented Editable Table and Drag and Drop Table features.',
        'Applied Agile methodologies using Trello for task and sprint management.',
        'Used GitHub for version control and implemented CI/CD pipelines.',
        'Wrote unit tests using Cypress and developed reusable components to enhance development efficiency and consistency.',
        'Consistently write clean, maintainable code following industry-standard style guides.',
      ],
    },
    {
      title: 'G2 Arena Website (Project Based Freelance)',
      stackUsed: [
        { icon: <SiHtml5 size={16} />, label: 'HTML5' },
        { icon: <SiCss3 size={16} />, label: 'CSS3' },
        { icon: <SiJavascript size={16} />, label: 'JavaScript' },
        { icon: <SiPhp size={16} />, label: 'PHP' },
      ],
      period: 'February - June 2024',
      responsibilities: [
        'Converted designs from Figma into a functional website.',
        'Developed the backend using PHP Native and managed a MySQL database.',
        'Integrated QRIS (Netzme) payment gateway for direct transactions on the website.',
      ],
    },
    {
      title: 'Bootcamp Frontend & Backend Path - Dicoding',
      stackUsed: [
        { icon: <SiReact size={16} />, label: 'React' },
        { icon: <SiJavascript size={16} />, label: 'JavaScript' },
        { icon: <SiNodedotjs size={16} />, label: 'Node.js' },
        { icon: <SiExpress size={16} />, label: 'Express' },
        { icon: <SiWebpack size={16} />, label: 'Webpack' },
      ],
      period: 'August - November 2022',
      responsibilities: [
        'Learned core JavaScript concepts, DOM manipulation, and responsive web design from scratch without UI frameworks like Bootstrap or Tailwind.',
        'Built Progressive Web Apps (PWA) with proper caching and offline support.',
        'Performed frontend unit testing using Jest and Puppeteer.',
        'Designed and styled web interfaces manually using semantic HTML and clean CSS.',
        'Developed basic RESTful APIs using Hapi.js and PostgreSQL, including route structuring and middleware setup.',
        'Implemented authentication and authorization systems on both Firebase and custom Hapi.js backend.',
        'Learned backend fundamentals such as authentication, authorization, error handling, data validation, and unit testing.',
        'Built and managed backend services using Firebase Firestore for data storage, user login, and session management.',
        'Collaborated on a final group project to develop a sea turtle conservation web application, fully integrated with Firebase authentication and deployed to Netlify.',
      ],
    },
  ]

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-10 row-start-2 w-full max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-center'>My Experience</h1>
        <section className=''>
          <h2 className='text-2xl font-bold mb-4 border-b pb-2'>Skills</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-xl font-semibold mb-2'>Frontend</h3>{' '}
              <ul className='list-disc list-inside space-y-1 ml-2 text-gray-300'>
                {frontendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-2'>Backend</h3>{' '}
              <ul className='list-disc list-inside space-y-1 ml-2 text-gray-300'>
                {backendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h3 className='text-xl font-semibold mb-2 mt-4'>Version Control</h3>{' '}
              <ul className='list-disc list-inside space-y-1 ml-2 text-gray-300'>
                {versionControlSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='text-2xl font-bold mb-4 border-b pb-2'>Education</h2>

          {education.map((edu, index) => (
            <div key={index} className='ml-2 flex flex-col sm:flex-row items-start gap-4'>
              <div className='flex-shrink-0 w-20 h-20 relative mt-1'>
                <Image
                  src={edu.logo}
                  alt={`${edu.school} Logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className='rounded-md'
                />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>{edu.school}</h3>{' '}
                <p className='text-gray-300'>{edu.department}</p>
                <p className='text-gray-300'>{edu.period}</p>
              </div>
            </div>
          ))}
        </section>

        <section className='mt-8'>
          <h2 className='text-2xl font-bold mb-6 border-b pb-2'>Experience</h2>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${
                index < experiences.length - 1 ? 'mb-8' : ''
              } rounded-lg border p-6 hover:shadow-md transition-shadow`}
            >
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2'>
                <h3 className='text-xl font-semibold'>{exp.title}</h3>
                <span className='bg-blue-900 text-blue-200 text-xs font-medium px-3 py-1 rounded-full'>
                  {exp.period}
                </span>
              </div>

              {/* Add Stack Icons */}
              <div className='flex flex-wrap gap-2 mt-2 mb-4'>
                {exp.stackUsed.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className='flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-xs'
                    title={tech.label}
                  >
                    {tech.icon}
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>

              <ul className='list-disc list-inside space-y-1 mt-3 ml-2 text-gray-300'>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <a
        href='/CV_Muhamad_Arfa_Alghiffari(2025).pdf'
        download
        className='fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 z-50'
        title='Download Resume'
      >
        <svg
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.22 20.75H5.78C5.43322 20.7359 5.09262 20.6535 4.77771 20.5075C4.4628 20.3616 4.17975 20.155 3.94476 19.8996C3.70977 19.6442 3.52745 19.3449 3.40824 19.019C3.28903 18.693 3.23525 18.3468 3.25 18V15C3.25 14.8011 3.32902 14.6103 3.46967 14.4697C3.61033 14.329 3.80109 14.25 4 14.25C4.19892 14.25 4.38968 14.329 4.53033 14.4697C4.67099 14.6103 4.75 14.8011 4.75 15V18C4.72419 18.2969 4.81365 18.5924 4.99984 18.8251C5.18602 19.0579 5.45465 19.21 5.75 19.25H18.22C18.5154 19.21 18.784 19.0579 18.9702 18.8251C19.1564 18.5924 19.2458 18.2969 19.22 18V15C19.22 14.8011 19.299 14.6103 19.4397 14.4697C19.5803 14.329 19.7711 14.25 19.97 14.25C20.1689 14.25 20.3597 14.329 20.5003 14.4697C20.641 14.6103 20.72 14.8011 20.72 15V18C20.75 18.6954 20.5041 19.3744 20.0359 19.8894C19.5677 20.4045 18.9151 20.7137 18.22 20.75Z'
            fill='#fff'
          />
          <path
            d='M12 15.75C11.9015 15.7504 11.8038 15.7312 11.7128 15.6934C11.6218 15.6557 11.5392 15.6001 11.47 15.53L7.47 11.53C7.33752 11.3878 7.2654 11.1997 7.26882 11.0054C7.27225 10.8111 7.35096 10.6258 7.48838 10.4883C7.62579 10.3509 7.81118 10.2722 8.00548 10.2688C8.19978 10.2654 8.38782 10.3375 8.53 10.47L12 13.94L15.47 10.47C15.6122 10.3375 15.8002 10.2654 15.9945 10.2688C16.1888 10.2722 16.3742 10.3509 16.5116 10.4883C16.649 10.6258 16.7277 10.8111 16.7312 11.0054C16.7346 11.1997 16.6625 11.3878 16.53 11.53L12.53 15.53C12.4608 15.6001 12.3782 15.6557 12.2872 15.6934C12.1962 15.7312 12.0985 15.7504 12 15.75Z'
            fill='#fff'
          />
          <path
            d='M12 15.75C11.8019 15.7474 11.6126 15.6676 11.4725 15.5275C11.3324 15.3874 11.2526 15.1981 11.25 15V4C11.25 3.80109 11.329 3.61032 11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4V15C12.7474 15.1981 12.6676 15.3874 12.5275 15.5275C12.3874 15.6676 12.1981 15.7474 12 15.75Z'
            fill='#fff'
          />
        </svg>
        Download Resume
      </a>
    </div>
  )
}
