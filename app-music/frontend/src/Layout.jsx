


import { ReproductorContextProvider } from './context/ReproductorContext'
import { UserContextProvider } from './context/UserContext'
import { NotificacionesContextProvider } from './context/NotificacionesContext'
import { Outlet } from 'react-router'





function Layout() {
  

  return (
    <>
     <NotificacionesContextProvider>
        <UserContextProvider>
          <ReproductorContextProvider>


            
            <Outlet />
          
          
          
          </ReproductorContextProvider>
        </UserContextProvider>
      </NotificacionesContextProvider>

 
  
  
    </> 
  )
}

export default Layout
