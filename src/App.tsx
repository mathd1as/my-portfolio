import './App.scss';

import myPicture from './images/my-picture.jpg'
import reactIcon from './assets/react2.svg'
import typescriptIcon from './assets/typescript.svg'
import javascriptIcon from './assets/javascript.svg'
import angularIcon from './assets/angular.svg'
import nodejsIcon from './assets/nodejs.svg'
import usaIcon from './assets/usa.svg'
import brazilIcon from './assets/brazil.svg'

function App() {
  return (
    <main className='bg-zinc-900'>
      {/* <header className='header-container'>
        <Logo/>
        <nav className="menu-options"> 
          <a>what we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          Contact us
        </button>
      </header>
      <div className="content-container">
          <div className="heading-container">
            <h2>Matheus de Lara Dias da Silva</h2>
            <h2>Engenheiro de software</h2>
          </div>
        <div className="bubble target">🎯</div>
        <div className="bubble shop">🛍️</div>
        <div className="bubble rocket">🚀</div>
        <div className="bubble fire">🔥</div>
      </div> */}
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* Avatar, nome e profissão */}
      <div className='flex justify-between'>
        <div className='flex flex-row'>
          <img src={myPicture} className='rounded-full h-60 w-60 border-2 border-white' />
          <div className='flex items-center ml-6'>
            <div>
              <h2 className='font-bold text-2xl '>Hi, I'm Matheus! 👋</h2>
              <h2 className='text-lg text-gray-400'>Software Engeener</h2>
            </div>
          </div>
        </div>
        {/* Lnagues */}
        <div className='w-1/3 mt-4'>
          <h3 className='font-bold text-sm'>Languages</h3>
          <div className='flex mt-4'>
            <img src={usaIcon} className='w-5 h-5 mr-4' />
            <span className='text-lg text-gray-400'>EN advanced (read)</span>
          </div>
          <div className='flex mt-4'>
            <img src={brazilIcon} className='w-5 h-5 mr-4' />
            <span className='text-lg text-gray-400'>PT - BR Native Speaker</span>
          </div>
          {/* Education */}
          <div className='mt-4'>
            <h3 className='font-bold text-sm'>Education</h3>
            <div className='flex mt-4'>
              <div className='mr-3 text-xl'>🎓</div>
              <span className='text-lg text-gray-400'>Computer Science Bachelors Degree - Universidade Estadual do Oeste do Parana</span>
            </div>
          </div>
          {/* FIM Education */}
        </div>
        {/* FIM Lnagues */}
      </div>
      {/* FIM Avatar, nome e profissão */}
      {/* Experiência */}
      <div className='flex flex-start my-12'>
        <div className='w-1/3'>
          <h3 className='font-bold text-lg'>Experience</h3>
          <span className='text-lg'>4 years working as a Software Engeener, in companys such as Itaú, Stone and Aftersale</span>
        </div>
      </div>
      {/* FIM Experiência */}
      {/* skills */}
      <div className='grid gap-y-4'>
        <div className='flex flex-row'>
          <img className='h-10 w-10' src={reactIcon} />
          <div className='ml-2 w-1/3 rounded-full border border-gray-500 z-0 bg-transparent'>
            <div className='w-2/3 bg-amber-500 z-50 rounded-full h-full flex justify-center items-center'>
              3 years
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <img className='h-10 w-10' src={angularIcon} />
          <div className='ml-2 w-1/3 rounded-full border border-gray-500 z-0 bg-transparent'>
            <div className='w-2/3 bg-amber-500 z-50 rounded-full h-full flex justify-center items-center'>
              3 years
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <img className='h-10 w-10' src={javascriptIcon} />
          <div className='ml-2 w-1/3 rounded-full border border-gray-500 z-0 bg-transparent'>
            <div className='w-2/3 bg-amber-500 z-50 rounded-full h-full flex justify-center items-center'>
              3 years
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <img className='h-10 w-10' src={typescriptIcon} />
          <div className='ml-2 w-1/3 rounded-full border border-gray-500 z-0 bg-transparent'>
            <div className='w-2/3 bg-amber-500 z-50 rounded-full h-full flex justify-center items-center'>
              3 years
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <img className='h-10 w-10' src={nodejsIcon} />
          <div className='ml-2 w-1/3 rounded-full border border-gray-500 z-0 bg-transparent'>
            <div className='w-2/3 bg-amber-500 z-50 rounded-full h-full flex justify-center items-center'>
              3 years
            </div>
          </div>
        </div>
      </div>
      {/* FIM skills */}
    </main>
  );
}

export default App;
