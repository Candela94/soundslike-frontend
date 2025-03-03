
import { createBrowserRouter } from "react-router";

import Layout from "../../Layout.jsx";
import Home from '../../pages/home/Home.jsx'
import Bibliotecas from '../../pages/bibliotecas/Bibliotecas.jsx'
import Groove from '../../pages/groove/Groove.jsx'
import Inicio from '../../pages/inicio/Inicio.jsx'
import LogIn from '../../pages/log-in/Log-in.jsx'
import Perfil from '../../pages/perfil/Perfil.jsx'
import Registro from '../../pages/registro/Registro.jsx'


const router = createBrowserRouter([{


    path:'/',
    element: <Layout />,
    children: [
        {
            index: true, //ruta por defecto
            element: <Inicio /> 

        },
        {
            path:"/home",
            element: <Home />
        },
        




        {
            path:"/login",
            element: <LogIn />
        },




        {
            path:"/registro",
            element: <Registro />
        },



        {
            path:"/perfil",
            element: <Perfil />
        },


        {
            path:"/bibliotecas",
            element: <Bibliotecas />
        },
       


        {
            path:"/groove",
            element: <Groove />
        },

        {
            path:"*",
            element:<Error />
        }

    ]


}])


export default router