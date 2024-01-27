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
import { BrowserRouter, Route, Routes ,createHashRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'


const router=createHashRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Productos',
    element:<Productos/>
  },
  {
    path:'/Clasificacion',
    element:<Clasificacion/>
  },
  {
    path:'/Categorias',
    element:<TpCategorias/>
  },
  {
    path:'/Generos',
    element:<Generos/>
  },
  {
    path:'/Colores',
    element:<Colores/>
  },
  {
    path:'/Usos',
    element:<Usos/>
  },
  {
    path:'/Precios',
    element:<Precios/>
  },
  {
    path:'/Tallas',
    element:<Tallas/>
  },
  {
    path:'/Stock',
    element:<Stock/>
  },
  {
    path:'*',
    element:<p style={{color:'black'}}>NOT FOUND</p>
  }

])


function App() {
  
  return (
    <>
    <Dashboard/>
    <RouterProvider router={router}/>

    {/* <BrowserRouter>
      <Routes>
        <Route path={rutaRaiz+'/'} element={<Home/>}/>
        <Route path={rutaRaiz+'/Productos'} element={<Home/>}/>
        <Route path={rutaRaiz+'/Clasificacion'} element={<Home/>}/>
        <Route path={rutaRaiz+'/Categorias'} element={<Home/>}/>
        <Route path={rutaRaiz+'/Generos'} element={<Generos/>}/>
        <Route path={rutaRaiz+'/Colores'} element={<Colores/>}/>
        <Route path={rutaRaiz+'/Usos'} element={<Usos/>}/>
        <Route path={rutaRaiz+'/Precios'} element={<Precios/>}/>
        <Route path={rutaRaiz+'/Tallas'} element={<Tallas/>}/>
        <Route path={rutaRaiz+'/Stock'} element={<Stock/>}/>
        <Route path={rutaRaiz+'/*'} element={<p style={{color:'black'}}>NOT FOUND</p>}/>
      </Routes>
    </BrowserRouter> */}
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
