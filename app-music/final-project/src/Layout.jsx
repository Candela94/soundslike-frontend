import { useState } from 'react'

import './css/Layout.css'
import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation'
import { Button } from './components/buttons/Button'

import Inicio from './pages/inicio/Inicio'
import { Header } from './components/header/Header'



import { Outlet } from 'react-router'


import { UserContextProvider } from './context/UserContext.jsx'
import { CardTendencias } from './components/cards/Cards.jsx'
import ReproductorPage from './pages/reproductor/ReproductorPage.jsx'
import Error from './pages/error/Error.jsx'


function Layout() {
  

  return (
    <>
  
  
  <Outlet />


 
  
  
    </> 
  )
}

export default Layout
