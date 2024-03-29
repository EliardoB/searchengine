import React, { useState } from 'react'
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import Routesreact from './components/routesreact';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routesreact />
            <Footer />
        </div>
    </div>
  )
}

export default App;