import './App.scss';

import myPicture from './images/my-picture.jpg'
import reactIcon from './assets/react2.svg'
import typescriptIcon from './assets/typescript.svg'
import javascriptIcon from './assets/javascript.svg'
import angularIcon from './assets/angular.svg'
import nodejsIcon from './assets/nodejs.svg'
import usaIcon from './assets/usa.svg'
import brazilIcon from './assets/brazil.svg'
import gitIcon from './assets/git.svg'
import xIcon from './assets/x.svg'
import instagramIcon from './assets/instagram.svg'
import linkedinIcon from './assets/linkedin.svg'

function App() {
  return (
    <main className='bg-zinc-800'>
      {/* Avatar, nome e profissão */}
      <div className='flex justify-between'>
        <div className='flex flex-row'>
          <img src={myPicture} className='rounded-full h-60 w-60 border-2 border-white' />
          <div className='flex items-center ml-6'>
            <div>
              <h2 className='font-bold text-2xl h2-apresentation-text mb-4'>Hi, I'm Matheus! 👋</h2>
              <h2 className='h2-position-text'>Software Engeener</h2>
            </div>
          </div>
        </div>
        {/* Lnagues */}
        <div className='w-1/3 mt-4'>
          <h3 className='h3-language-education'>Languages</h3>
          <div className='flex mt-4 items-center'>
            <img src={usaIcon} className='w-5 h-5 mr-4'/>
            <span className='p-education-text text-gray-400'>EN advanced (read)</span>
          </div>
          <div className='flex mt-4 items-center'>
            <div>
              <img src={brazilIcon} className='w-5 h-5 mr-4' />
            </div>
            <div>
              <span className='p-education-text text-gray-400'>PT - BR Native Speaker</span>
            </div>
          </div>
          {/* Education */}
          <div className='mt-4'>
            <h3 className='h3-language-education'>Education</h3>
            <div className='flex mt-4 items-center'>
              <div className='mr-3 text-xl'>🎓</div>
              <p className='p-education-text text-gray-400'>Computer Science Bachelors Degree - Universidade Estadual do Oeste do Parana</p>
            </div>
          </div>
          {/* FIM Education */}
        </div>
        {/* FIM Lnagues */}
      </div>
      {/* FIM Avatar, nome e profissão */}
      {/* Experiência */}
      <div className='flex flex-start'>
        <div className='w-3/6'>
          <h3 className='h3-about-title'>Experience</h3>
          <div className='mt-4'>
            <p className='p-experience-text'>Software engeener with 3+ years of experience in software development, participated with solutions for the sectors of govtech, marketplace and fintechs, using as technology: Node, TypeScript, JavaScript, and Angular in addition to databases (SQL and NoSQL) and Agile methodologies such as SCRUM. Always focused on the best delivery to the customer in a responsible, agile and proactive way.</p>
          </div>
        </div>
      </div>
      {/* FIM Experiência */}
      {/* skills */}
      <div className='grid gap-y-4 mt-3'>
        <div className='flex flex-row items-center'>
          <img className='h-10 w-10 ' src={reactIcon} />
          <div className='ml-2 w-2/6 rounded-full border border-gray-500 z-0 bg-transparent h-8'>
            <div className='w-1/3 z-50 rounded-full h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-blue-500'>
              1 year
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <img className='h-10 w-10' src={angularIcon} />
          <div className='ml-2 w-2/6 rounded-full border border-gray-500 z-0 bg-transparent h-8'>
            <div className='w-2/4 z-50 rounded-full h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-blue-500'>
              2 years
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <img className='h-10 w-10' src={javascriptIcon} />
          <div className='ml-2 w-2/6 rounded-full border border-gray-500 z-0 bg-transparent h-8'>
            <div className='w-2/3 z-50 rounded-full h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-blue-500'>
              3 years
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <img className='h-10 w-10' src={typescriptIcon} />
          <div className='ml-2 w-2/6 rounded-full border border-gray-500 z-0 bg-transparent h-8'>
            <div className='w-2/3 z-50 rounded-full h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-blue-500'>
              3 years
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <img className='h-10 w-10' src={nodejsIcon} />
          <div className='ml-2 w-2/6 rounded-full border border-gray-500 z-0 bg-transparent h-8'>
            <div className='w-2/3 z-50 rounded-full h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-blue-500'>
              3 years
            </div>
          </div>
        </div>
      </div>
      {/* FIM skills */}
      <div className='mt-10 absolute bottom-10 right-20'>
        <div className='space-x-10 flex flex-row'>
          <a href="https://www.instagram.com/mathd1as/">
            <div className='cursor-pointer rounded-full border-2 border-white w-10 h-10 flex items-center justify-center container-links'>
              <img src={instagramIcon} className='h-5 w-5'/>
            </div>
          </a>  
          <div className='cursor-pointer rounded-full border-2 border-white w-10 h-10 flex items-center justify-center container-links'>
            <a href="https://twitter.com/mathd1as">
              <img src={xIcon} className='h-5 w-5'/>
            </a>
          </div>
          <div className='cursor-pointer rounded-full border-2 border-white w-10 h-10 flex items-center justify-center container-links'>
              <a href="https://www.linkedin.com/in/matheus-de-lara-dias-da-silva-2b6396185/">
                <img src={linkedinIcon} className='h-5 w-5'/>
              </a>
          </div>
          <div className='cursor-pointer rounded-full border-2 border-white w-10 h-10 flex items-center justify-center container-links'>
            <a href="https://www.instagram.com/mathd1as/">
              <img src={gitIcon} className='h-5 w-5'/>
            </a>
          </div>
        </div>
        <div className='mt-4 h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500'>
        </div>
        <p className='mt-2'>matheus.vex@gmail.com</p>
      </div>
      {/* FIM skills */}
    </main>
  );
}

export default App;
