import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './pages/home'
import ImgUpscale from './pages/imgUpscale'
import ImgBGRemove from './pages/imgBGRemove'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="upscale" element={<ImgUpscale/>}/>
              <Route path="bgremove" element={<ImgBGRemove/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
