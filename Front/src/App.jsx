import { useState } from 'react'
import '/public/styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { NavBar } from './partials/Navbar'
import { Footer } from './partials/Footer'
import { Seccion1 } from './Seccion1'
import { Condicion } from './condiciones'
import { Login } from './Login'
import { Cart } from './Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Seccion1' element={<Seccion1 />}></Route>
        <Route path='/Condiciones' element={<Condicion/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>


  )
}

export default App
