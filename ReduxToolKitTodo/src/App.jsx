import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import { ThemeContextsProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/theme/Themebtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl.classList.remove("light", "dark")
    htmlEl.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextsProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">

        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                ✨ TaskFlow
              </h1>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Manage your tasks with elegance</p>
            </div>
            <ThemeBtn />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/60 dark:border-slate-800">
              <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                Add New Task
              </h2>
              <AddTodo />
            </div>

            <div
              className="lg:col-span-7 rounded-2xl p-6 sm:p-8   border border-amber-200/60 dark:border-slate-800 bg-amber-50/40 dark:bg-slate-900/90 relative overflow-hidden bg-cover bg-center min-h-[500px]"

            >
              <div className="relative z-10">
                <h2 className="text-xs font-bold text-amber-800/70 dark:text-amber-400/80 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <span>📝</span> Notebook Tasks
                </h2>
                <Todos />
              </div>
            </div>

          </div>
        </main>

      </div>
    </ThemeContextsProvider>
  )
}

export default App