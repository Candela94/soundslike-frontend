


import { Outlet } from 'react-router'

import { Notificaciones } from './components/notificaciones-success-error/Notificaciones'
import { useContext } from 'react'
import { Header } from './components/header/Header'
import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation'
import { PlayerContextProvider } from './context/PlayerContext'



function Layout() {




  return (
    <>





      <div className="Header-main">
        <Header />
        {/* <div className="Notificaciones-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <Notificaciones />
        </div> */}
        <Outlet />
      </div>

      <BottomNavigation />











    </>
  )
}

export default Layout
