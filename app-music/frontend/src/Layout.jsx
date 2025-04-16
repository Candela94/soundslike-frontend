


import { Outlet } from 'react-router'
import { ReproductorContextProvider } from './context/ReproductorContext'





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
