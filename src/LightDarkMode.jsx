import React from 'react'
import { LocalStorageData } from './LocalStorageData'
import './Theme.css'

function LightDarkMode() {

    const [theme, setTheme] = LocalStorageData('theme','dark')

    function handleToggleThem() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <div className='light-dark-mode' data-theme={theme}>
          <div className="container">
              <p>Hello World</p>
              <button onClick={handleToggleThem} >Swith Mode</button>
          </div>
    </div>
  )
}

export default LightDarkMode
