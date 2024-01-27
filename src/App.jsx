// import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Productos} from './pages/Productos/Productos.jsx'
import {TpCategorias} from './pages/TpCategorias/TpCategorias.jsx'
import {Clasificacion} from './pages/Clasificacion/Clasificacion.jsx'
import {Generos} from './pages/Generos/Generos.jsx'
import {Usos} from './pages/Usos/Usos.jsx'
import {Tallas} from './pages/Tallas/Tallas.jsx'
import {Colores} from './pages/Colores/Colores.jsx'
import {Precios} from './pages/Precios/Precios.jsx'
import { Storage} from './pages/storage/storage.jsx'
import { Stock} from './pages/Stock/Stock.jsx'
import SelectDinamic from './components/selectPrueba/SelectDinamic.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'

function App() {
  
  return (
    <>
    <Dashboard/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Clasificacion' element={<Clasificacion/>}/>
        <Route path='/Categorias' element={<TpCategorias/>}/>
        <Route path='/Generos' element={<Generos/>}/>
        <Route path='/Colores' element={<Colores/>}/>
        <Route path='/Usos' element={<Usos/>}/>
        <Route path='/Precios' element={<Precios/>}/>
        <Route path='/Tallas' element={<Tallas/>}/>
        <Route path='/Stock' element={<Stock/>}/>
        <Route path='*' element={<p style={{color:'black'}}>NOT FOUND</p>}/>
      </Routes>
    </BrowserRouter>
      {/* <Storage/> */}
      {/* <Productos/> */}
      {/* <Generos/> */}
      {/* <Usos/> */}
      {/* <Colores/> */}
      {/* <Precios/> */}
      {/* <Tallas/> */}
      {/* <Stock/> */}
      {/* <SelectDinamic/> */}

      {/* <TpCategorias/> */}
      {/* <Clasificacion/> */}
    </>
  )
}

export default App
