import './App.css';
import { createContext, useState } from 'react';
import Footer from './components/Footer';
import Button from './components/Button';

export const ThemeContext = createContext('')

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className={'wrapper ' + theme}>
        <h1>My blog</h1>
        <div className='image'></div>
        <div className='toggler' onClick={toggleTheme}>
          <svg className={`dark-mode-toggle__icon ${theme === "dark" && "dark-mode-toggle__icon--moon"}`} width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle className="dark-mode-toggle__cut-out" r="6" cx="24" cy="10" fill="black" />
              </mask>
            </defs>
            <circle className="dark-mode-toggle__center-circle" r="6" cx="12" cy="12" fill="currentColor" mask="url(#mask)" />
            <g className="dark-mode-toggle__rays" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" x2="12" y1="3" y2="1" />
              <line x1="21" x2="23" y1="12" y2="12" />
              <line x1="12" x2="12" y1="21" y2="23" />
              <line x1="1" x2="3" y1="12" y2="12" />
            </g>
            <g className="dark-mode-toggle__rays" stroke="currentColor" stroke-width="2" stroke-linecap="round" transform="rotate(45 12 12)">
              <line x1="12" x2="12" y1="3" y2="1" />
              <line x1="21" x2="23" y1="12" y2="12" />
              <line x1="12" x2="12" y1="21" y2="23" />
              <line x1="1" x2="3" y1="12" y2="12" />
            </g>
          </svg>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>

  );

}

export default App;
