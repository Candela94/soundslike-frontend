
import { createBrowserRouter } from "react-router";

import Layout from "../../Layout.jsx";
import Home from '../../pages/home/Home.jsx'
import Bibliotecas from '../../pages/bibliotecas/Bibliotecas.jsx'
import Favoritos from "../../pages/bibliotecas/Favoritos.jsx";
import SoundsCanciones from "../../pages/bibliotecas/SoundsCanciones.jsx";
import Sound from "../../pages/sLike/SoundsLike.jsx";
import Inicio from '../../pages/inicio/Inicio.jsx'
import Login from "../../pages/login/LogIn.jsx";
import Perfil from '../../pages/perfil/Perfil.jsx'
import Registro from "../../pages/registro/Registro.jsx";
import Error from "../../pages/error/Error.jsx";

import ReproductorPage from "../../pages/reproductor/ReproductorPage.jsx";
import HomeSounds from "../../pages/home-sounds/HomeSounds.jsx";
import BuscadorPag from "../../pages/buscador/BuscadorPag.jsx";

import NuevaLista from "../../pages/nuevalista/NuevaLista.jsx";

import Admin from "../../pages/formu-admin/FormuAdmin.jsx"
import FormuPlayLists from "../../pages/formu-admin/FormuAdminPlaylist.jsx";
import ProtectedRoute from "../../pages/protected-route/ProtectedRoute.jsx";
import NoAutorizado from "../../pages/no-autorizado/NoAutorizado.jsx";
import Listas from "../../pages/listas/Listas.jsx";
import SeccionPlayLists from "../../pages/home/SeccionListas.jsx";
import Info from "../../pages/info/Info.jsx";

import MiMusica from "../../pages/perfil/MiMusica.jsx";





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
            path:"/playlists/:pid",
            element: <SeccionPlayLists />
        },


        {
            path:"/soundslike/home",
            element: <HomeSounds />
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
            path:"/buscador",
            element: <BuscadorPag />
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
            path:"/favoritos",
            element: <Favoritos />
        },


        {
            path:"/soundsongs",
            element: <SoundsCanciones />
        },


        {
            path:"/playlists/:pid/canciones",
            element: <Listas />
        },



        {
            path:"/playlist",
            element: <NuevaLista />
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
            path:"/info",
            element: <Info />
        },


      

        {
            path:"/mimusica",
            element: <MiMusica />
        },

        {
            path:"/admin",
            element: <ProtectedRoute requiredRole = 'admin' />,
            children : [
                {
                index : true ,
                element : <Admin />
                }
            ]
        },
        {
            path:"/playlists",
            element: <ProtectedRoute requiredRole = 'admin' />,
            children : [
                {
                index : true ,
                element : <FormuPlayLists />
                }
            ]
        },

        {
            path:"/acceso-denegado",
            element:<NoAutorizado />
        },

      
        {
            path:"*",
            element:<Error />
        }

    ]


}])


export default router