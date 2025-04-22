


import { Outlet } from 'react-router'
import { ReproductorContext, ReproductorContextProvider } from './context/ReproductorContext'
import { Notificaciones } from './components/notificaciones-success-error/Notificaciones'
import { useContext } from 'react'
import { Header } from './components/header/Header'
import { BottomNavigation } from './components/bottom-navigation-header/BottomNavigation'




function Layout() {

  
  

  return (
    <>
         
         <ReproductorContextProvider>


            <Notificaciones />

            <div className="Header-main">
            <Header/>
            <Outlet />
           </div>

              <BottomNavigation/>
    
            </ReproductorContextProvider>
           
            
          
          
         

 
  
  
    </> 
  )
}

export default Layout
