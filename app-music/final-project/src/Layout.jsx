import { useState } from 'react'


import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation'
import { Button } from './components/buttons/Button'

import Inicio from './pages/inicio/Inicio'
import { Header } from './components/header/Header'
import { ReproductorContextProvider } from './context/ReproductorContext'



import { Outlet } from 'react-router'





function Layout() {
  

  return (
    <>
  
  <ReproductorContextProvider>
  <Outlet />
  </ReproductorContextProvider>


 
  
  
    </> 
  )
}

export default Layout
