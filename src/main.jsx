import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Layout from './Layout.jsx'

import { RouterProvider } from 'react-router'
import router from './lib/routes/router.jsx'
import { NotificacionesContextProvider } from './context/NotificacionesContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import { PlayerContextProvider } from './context/PlayerContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerContextProvider>
    <UserContextProvider>
      <NotificacionesContextProvider>
  


        <RouterProvider router={router} />

      

      </NotificacionesContextProvider>
    </UserContextProvider>

    </PlayerContextProvider>

  </StrictMode>,
)
