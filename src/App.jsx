import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Presentation from './components/Presentation/Presentation'
import Skills from './components/Habilities/Skills'

function App() {

  return (
    <>
      <NavBar />
      <Presentation/>
      <Skills/>
    </>
  )
}

export default App
