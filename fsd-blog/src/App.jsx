import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Article from './components/Article.jsx'
import Latest from './components/Latest.jsx'
import Exclusive from './components/Exclusive.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/latest" element={<Latest />}/> 
          <Route exact path="/exclusive" element={<Exclusive />}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
