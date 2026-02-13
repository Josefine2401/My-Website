import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Background from './Components/Background/Background';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Pages/Hero/Hero';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import { ProjectPage } from './Components/ProjectPage/ProjectPage';


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Background />
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;


