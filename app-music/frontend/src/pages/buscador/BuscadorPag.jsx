
import './buscadorpag.css'
import { Buscador } from '../../components/buscador/Buscador.jsx';
import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';
import { useFetchSongs } from '../../../hooks/usefetchSongs.jsx';
import { Cancion } from '../../components/cancion/Cancion.jsx';
import { useState } from 'react';

const BuscadorPag = () => {



    const { canciones, loading, error } = useFetchSongs()
    const [searchTerm, setSearchTerm] = useState("")



    return (
        <>
            <div className="Header-main">
                <Header />
                <main className="Main-buscador">
                    <h2 className='Main-titulo'>Busca tu canción</h2>

                    <Buscador setSearchTerm = {setSearchTerm}/>



                    <div className="Galeria-canciones">
                        {
                            loading? (
                                <p>Cargando canciones</p>
                            ) : error ? (
                                <p>Error al cargar {error}</p>
                            ) : canciones.length > 0 ? (

                                <ul className="Galeria-ul">
                                    {
                                        canciones.map((cancion) => {

                                            return (
                                            <li className="Galeria-li" key={cancion._id}><Cancion id={cancion._id} nombre={cancion.nombre} artista={cancion.artista} imagen={cancion.imagen}  audio= {cancion.audio}/></li>

                                        )})
                                    }
                                </ul>
                            ) : <p>No hay canciones disponibles</p>

                            
                        }

                    </div>




                </main>
            </div>
            <BottomNavigation />
        </>
    );
}

export default BuscadorPag;