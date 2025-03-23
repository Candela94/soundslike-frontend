
import { createBrowserRouter } from "react-router";

import Layout from "../../Layout.jsx";
import Home from '../../pages/home/Home.jsx'
import Bibliotecas from '../../pages/bibliotecas/Bibliotecas.jsx'
import Sound from "../../pages/sLike/SoundsLike.jsx";
import Inicio from '../../pages/inicio/Inicio.jsx'
import Login from "../../pages/login/LogIn.jsx";
import Perfil from '../../pages/perfil/Perfil.jsx'
import Registro from "../../pages/registro/Registro.jsx";
import Error from "../../pages/error/Error.jsx";
import Buscador from "../../pages/buscador/Buscador.jsx";
import ReproductorPage from "../../pages/reproductor/ReproductorPage.jsx";


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
            element: <Login />
        },




        {
            path:"/registro",
            element: <Registro />
        },


        {
            path:"/buscar",
            element: <Buscador />
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
            path:"/soundslike",
            element: <Sound />
        },



        {
            path:"/reproductor",
            element: <ReproductorPage />
        },


        {
            path:"*",
            element:<Error />
        }

    ]


}])


export default router