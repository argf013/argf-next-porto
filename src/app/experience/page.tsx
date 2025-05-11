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
      logo: 'https://005027.sgp1.vultrobjects.com/sikad/gambar/Logo.LswyahUtkX.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6OWHMXMNIU2JY5WPLX3R%2F20250511%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20250511T103206Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=29df8864532e7fa23940c9a93fbacc24b2b00eb216acb286b67e54fef501a1b8'
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
        <section className=''>
          <h2 className='text-2xl font-bold mb-4 border-b pb-2'>Skills</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
              <ul className='list-disc list-inside space-y-1 ml-2 text-gray-700 dark:text-gray-300'>
                {frontendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-2'>Backend</h3>
              <ul className='list-disc list-inside space-y-1 ml-2 text-gray-700 dark:text-gray-300'>
                {backendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              <h3 className='text-xl font-semibold mb-2 mt-4'>Version Control</h3>
              <ul className='list-disc list-inside space-y-1 ml-2 text-gray-700 dark:text-gray-300'>
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
                <h3 className='text-lg font-semibold'>{edu.school}</h3>
                <p className='text-gray-700 dark:text-gray-300'>{edu.department}</p>
                <p className='text-gray-700 dark:text-gray-300'>{edu.period}</p>
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
                <span className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full'>
                  {exp.period}
                </span>
              </div>

              {/* Add Stack Icons */}
              <div className='flex flex-wrap gap-2 mt-2 mb-4'>
                {exp.stackUsed.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className='flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs'
                    title={tech.label}
                  >
                    {tech.icon}
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>

              <ul className='list-disc list-inside space-y-1 mt-3 ml-2 text-gray-700 dark:text-gray-300'>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
