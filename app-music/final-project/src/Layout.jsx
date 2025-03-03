import { useState } from 'react'

import './css/Layout.css'
import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation'
import { Button } from './components/buttons/Button'

import Inicio from './pages/inicio/Inicio'
import { Header } from './components/header/Header'


import { MenuDropDown } from './components/menu-dropdown/Menu-dropDown'
import { Outlet } from 'react-router'


import LogIn from './pages/log-in/Log-in.jsx'





function Layout() {
  

  return (
    <>
    <Header />
  {/* <Outlet /> */}
  <LogIn />
    <BottomNavigation />
  
    </>
  )
}

export default Layout
