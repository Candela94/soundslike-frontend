import { useState } from 'react'


import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation'
import { Button } from './components/buttons/Button'

import Inicio from './pages/inicio/Inicio'
import { Header } from './components/header/Header'
import { ReproductorContextProvider } from './context/ReproductorContext'
import { UserContextProvider } from './context/UserContext'



import { Outlet } from 'react-router'





function Layout() {
  

  return (
    <>
  <UserContextProvider>
  <ReproductorContextProvider>
  <Outlet />
  </ReproductorContextProvider>
  </UserContextProvider>

 
  
  
    </> 
  )
}

export default Layout
