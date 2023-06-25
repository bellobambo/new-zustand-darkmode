import { useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import People from './components/People'
import useStore from './store'



function App() {
  const toggleDarkMode = useStore(state => state.toggleDarkMode)
  const dark = useStore((state) => state.dark)


  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark")
    } else {
      document.querySelector("body").classList.remove("dark")
    }
  } , [dark])

  return (
    <>
      <div>
        <button onClick={toggleDarkMode}>toggleDarkMode</button>
        <h1>People </h1>
        <Input />
        <p>i have a website now</p>
        <People />
      </div>

    </>
  )
}

export default App
