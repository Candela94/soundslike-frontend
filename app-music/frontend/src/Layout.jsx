


import { Outlet } from 'react-router'
import { ReproductorContextProvider } from './context/ReproductorContext'
import { Notificaciones } from './components/notificaciones-success-error/Notificaciones'




function Layout() {
  

  return (
    <>
         
           <ReproductorContextProvider>
            <Notificaciones />
            <Outlet />
            </ReproductorContextProvider>
            
          
          
         

 
  
  
    </> 
  )
}

export default Layout
