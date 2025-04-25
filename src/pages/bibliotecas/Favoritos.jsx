
import { Header } from '../../components/header/Header';
import SubHeader from '../../components/subheader/Subheader';
import { CancionLike } from '../../components/cancion/Cancion';
import './bibliotecas.css'
import { NavLink } from 'react-router';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { useFetchFavoritos } from '../../../hooks/useFavorites';
import { useFavoritos } from '../../../hooks/useFavorites';
import { useEffect } from 'react';




const Favoritos = () => {

    const { favoritos, getFavoritos, loading, error } = useFetchFavoritos()


    useEffect(() => {
        getFavoritos()
    }, [])

    console.log(favoritos)

    return (


        <>

            {console.log(favoritos)}
          

                <div className="Contenido">

                    <div className="Subheader-intro">
                        <SubHeader />
                        <div className="Bibliotecas-intro">
                            <h1 className='Bibliotecas-titulo'>Mis favoritos</h1>

                        </div>
                    </div>


                    <main className="Main-bibliotecas">

                       

                        <div className="Galeria-listas">
                            {
                                loading ? (
                                    <p>Cargando favoritos...</p>

                                ) : error ? (

                                    <p>Error al cargar favoritos {error}</p>


                                ) :  Array.isArray(favoritos) && favoritos.length > 0 ? (


                                    <ul className="Galeria-ul">

                                        {favoritos.map((f, index) => (
                                            <li className="Galeria-li" key={f._id}> <CancionLike 
                                            nombre={f.nombre} 
                                            artista={f.artista} 
                                            imagen={f.imagen}
                                             _id={f._id} 
                                             audio={f.audio} 
                                             allSongs={favoritos}
                                             index={index} /></li>
                                        ))
                                        }
                                    </ul>



                                ) : (
                                    <p className='Galeria-mensaje'>No tienes favoritos agregados</p>
                                )
                            }
                        </div>


                    </main>
                </div>


          

       


        </>


    );
}

export default Favoritos;