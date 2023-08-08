import { useState } from 'react'
import '/public/styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { NavBar } from './partials/Navbar'
import { Footer } from './partials/Footer'
import { Seccion1 } from './Seccion1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Seccion1' element={<Seccion1 />}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>


  )
}

export default App
