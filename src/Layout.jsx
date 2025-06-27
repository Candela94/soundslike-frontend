


import { Outlet } from 'react-router'

import { Notificaciones } from '@/components/notificaciones-success-error/Notificaciones'
import { useContext } from 'react'
import { Header } from '@/components/header/Header'
import { BottomNavigation } from '@/components/bottom-navigation-header/BottomNavigation'
import { PlayerContextProvider } from '@/context/PlayerContext'



function Layout() {




  return (
    <>





      {/* <div className="Header-main"> */}
    
     
    <Notificaciones />
      
        <Outlet />
      {/* </div> */}

    











    </>
  )
}

export default Layout
