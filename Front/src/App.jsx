import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { Seccion1 } from './Seccion1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Seccion1' element={<Seccion1 />}></Route>
      </Routes>

    </BrowserRouter>


  )
}

export default App
