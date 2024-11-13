import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import Contact from './view/Contact'

import Foot from './components/Foot'
import Header from './components/Header'
import Subscribe from './components/Subscribe'


function App() {
  

  return (
    
    <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        
          </Routes>
        </main>
        <Subscribe />
        <Foot />
    </BrowserRouter>
  )
}

export default App
