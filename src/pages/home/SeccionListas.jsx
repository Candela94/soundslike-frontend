



import { useFetchSongsList } from "../../../hooks/usefetchSongs";
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { useParams } from "react-router";
import { useEffect } from "react";
import { Cancion } from "../../components/cancion/Cancion";
import { usePlayer } from "../../context/PlayerContext";
import './home.css'




const SeccionPlayLists = () => {

    const { pid } = useParams();
    console.log('id de la playlist recibido', pid)
    const { canciones, loading, error, nombrePlaylist, coverImage } = useFetchSongsList(pid)
    const { loadList, currentSong } = usePlayer();
    const imgDefault = '../img/default.jpg'



    useEffect(() => {
        if (canciones.length > 0) {
            loadList(canciones, 0);
        }
    }, [canciones]);



    return (


        <>




            <main className="Main-cancionesListas">
                <div className="Cabecera-img">
                    <img src={coverImage || imgDefault} alt="portada" className="Cabecera-img" />

                    <h1 className="Cabecera">SOUNDsLIKE {nombrePlaylist}</h1>
                </div>




                <div className="Galeria-canciones">

                    {

                        loading ? (

                            <p>Cargando canciones</p>


                        ) : error ? (


                            <p>Error al cargar canciones</p>



                        ) : canciones.length > 0 ? (

                            <ul className="Galeria-ul">
                                {

                                    canciones.map((c,index) => {
                                        return (

                                            <li className="Galeria-li" key={c._id}><Cancion imagen={c.imagen} nombre={c.nombre} artista={c.artista} audio={c.audio}  handlePlaySong={() => loadList(canciones, index)} /></li>


                                        )
                                    })



                                }
                            </ul>

                        ) : (
                            <p>No existen canciones</p>
                        )
                    }

                </div>



            </main>




        </>
    );
}

export default SeccionPlayLists;