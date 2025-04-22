


import { Header } from "../../components/header/Header";
import './reproductorpage.css'

import { CardReproduccion } from "../../components/card-reproduccion/CardReproduccion";

import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";
import { ReproductorContext } from "../../context/ReproductorContext";
import { useContext, useState } from "react";


import { useFetch } from "../../../hooks/useFetch";
import { BsChevronCompactDown } from "react-icons/bs";
import { useAddSongsToPlaylist } from "../../../hooks/useAddSongs";
import { NotificacionesContext } from "../../context/NotificacionesContext";


const ReproductorPage = () => {

    const { currentSong} = useContext(ReproductorContext)

    const { bibliotecas } = useFetch()

  

    const [openMenu, setOpenMenu] = useState(false)

    const { addSong, loading, error, success } = useAddSongsToPlaylist();

    const { mostrarNotificacion } = useContext(NotificacionesContext)


  


    //Función para añadir canciones a una lista 
    const handleAdd = async (playlistId) => {
       

        if (!currentSong._id) {

            mostrarNotificacion("error", "No has seleccionado ninguna canción")
            return;
        }

        if(!playlistId){
            mostrarNotificacion('error', 'No se ha seleccionado ninguna lista')
            return;
        }


        try {
            console.log('Añadiendo canción a la playlist', {playlistId, songId: currentSong._id})

            await addSong(playlistId, currentSong._id);
            mostrarNotificacion('success', 'Canción añadida con éxito')
            setOpenMenu(false)

        } catch (e) {

            console.error("error al añadir la cancion", e)
            mostrarNotificacion("error", "Error al añadir la cancion")
        }


    }



        

            












return (

    <>
       

            <main className="Main-reproductor">

                <img src={currentSong.imagen} alt="fondo" className="Fondo" />


                <div className="Main-contenido">


                    <CardReproduccion />


                </div>

            </main>
         


    </>

);
}



export default ReproductorPage;