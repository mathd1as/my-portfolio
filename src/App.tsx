import './App.scss';

import myPicture from './images/my-picture.jpg'
import reactIcon from './assets/react2.svg'
import typescriptIcon from './assets/typescript.svg'
import javascriptIcon from './assets/javascript.svg'
import angularIcon from './assets/angular.svg'
import nodejsIcon from './assets/nodejs.svg'

function App() {
  return (
    <main>
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
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {/* Avatar, nome e profissão */}
      <div className='flex '>
        <div className='flex flex-row'>
          <img src={myPicture} className='rounded-full h-60 w-60 border-2 border-white' />
          <div className='flex items-center ml-6'>
            <div>
              <h2>Hi, I'm Matheus! 👋</h2>
              <h2>Software Engeener</h2>
            </div>
          </div>
        </div>
      </div>
      {/* FIM Avatar, nome e profissão */}
      {/* Experiência */}
      <div className='flex flex-start my-12'>
        <div className='w-1/3'>
          <h3>Epxerience</h3>
          <span>4 years working as a Software Engeener, in companys such as Itaú, Stone and Aftersale</span>
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
