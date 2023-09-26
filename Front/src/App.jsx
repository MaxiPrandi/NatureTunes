import { useState } from 'react'
import '/public/styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { NavBar } from './partials/Navbar'
import { Footer } from './partials/Footer'
import { Condicion } from './condiciones'
import { Login } from './Login'
import { Cart } from './Cart'
import { Auriculares } from './Productos/auriculares'
import { Parlantes } from './Productos/parlantes'
import { Bandejas } from './Productos/bandejas'
import { Proyecto } from './Productos/proyecto'
import { Materiales } from './Productos/materiales'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Productos/auriculares' element={<Auriculares />}></Route>
        <Route path='/Productos/parlantes' element={<Parlantes />}></Route>
        <Route path='/Productos/bandejas' element={<Bandejas />}></Route>
        <Route path='/Productos/proyecto' element={<Proyecto />}></Route>
        <Route path='/Productos/materiales' element={<Materiales />}></Route>
        <Route path='/Condiciones' element={<Condicion/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>


  )
}

export default App
