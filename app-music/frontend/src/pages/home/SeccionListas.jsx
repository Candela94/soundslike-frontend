



import { useFetchSongsList } from "../../../hooks/usefetchSongs";
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { useParams } from "react-router";
import { Cancion } from "../../components/cancion/Cancion";




const SeccionPlayLists = () => {

    const {pid} = useParams();
    console.log('id de la playlist recibido', pid)
    const {canciones, loading, error, nombrePlaylist, coverImage } = useFetchSongsList(pid)



    return ( 


        <>


        <div className="Header-Main">
            <Header/>

                <div className="Cabecera-img">
                    <img src= {coverImage} alt="portada" className="Cabecera-img" />
                  
                <h1 className="Cabecera">SOUNDsLIKE {nombrePlaylist}</h1>
                </div>
            <main className="Main-cancionesListas">




                <div className="Galeria-canciones">

                    {

                        loading? (

                            <p>Cargando canciones</p>


                        ) : error ? (


                            <p>Error al cargar canciones</p>



                        ) : canciones.length > 0? (

                            <ul className="Galeria-ul">
                           {

                            canciones.map((c) => {
                                return(

                                    <li className="Galeria-li" key={c._id}><Cancion imagen={c.imagen} nombre={c.nombre} artista={c.artista}/></li>
                                    

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

            <BottomNavigation />
        </div>
        
        
        </>
     );
}
 
export default SeccionPlayLists;