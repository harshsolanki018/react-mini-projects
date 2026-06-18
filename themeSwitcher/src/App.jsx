import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/Theme'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode =()=>{
    setThemeMode("light")
  }
  const darkMode =()=>{
    setThemeMode("dark")
  }

  //how theme changes
  useEffect(()=>{
    const selector = document.querySelector('html').classList
    selector.remove("light","dark")
    selector.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value = {{themeMode, lightMode, darkMode}}>
      <div className="flex dark:bg-gray-700  flex-wrap min-h-screen items-center ">
        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
