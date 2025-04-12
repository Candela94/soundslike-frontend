


import { ReproductorContextProvider } from './context/ReproductorContext'
import { UserContextProvider } from './context/UserContext'
import { NotificacionesContextProvider } from './context/NotificacionesContext'
import FormuAdmin from './pages/formu-admin/FormuAdmin.jsx'
import { Reproductor } from './components/reproductor/Reproductor.jsx'

import { Outlet } from 'react-router'
import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation.jsx'





function Layout() {
  

  return (
    <>
     <NotificacionesContextProvider>
        <UserContextProvider>
          <ReproductorContextProvider>
            <Outlet />
            {/* <FormuAdmin /> */}
          
          
          </ReproductorContextProvider>
        </UserContextProvider>
      </NotificacionesContextProvider>

 
  
  
    </> 
  )
}

export default Layout
