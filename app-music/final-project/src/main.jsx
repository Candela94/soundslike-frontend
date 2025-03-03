import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Layout from './Layout.jsx'

import { RouterProvider } from 'react-router'
import router from './lib/routes/router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
