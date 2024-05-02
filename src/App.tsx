import './App.scss';
import { Logo } from './components/logo'
import { ArrowIcon } from './components/arrow-icon'

function App() {
  return (
    <main>
      <header className='header-container'>
        <Logo/>
        <nav className="menu-options"> 
          <a>what we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className="btn-face-white"></div>
          <div className="btn-face-purple"></div>
          Contact us
          {/* <ArrowIcon/> */}
        </button>
      </header>
    </main>
    
  );
}

export default App;
