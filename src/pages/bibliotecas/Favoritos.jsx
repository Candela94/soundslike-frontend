
import { Header } from '@/components/header/Header';
import SubHeader from '@/components/subheader/Subheader';
import { CancionLike } from '@/components/cancion/Cancion';
import './bibliotecas.css'
import { NavLink } from 'react-router';
import { BottomNavigation } from '@/components/bottom-navigation-header/BottomNavigation';
import { useFetchFavoritos } from '../../../hooks/useFavorites';
import { useFavoritos } from '../../../hooks/useFavorites';
import { useEffect } from 'react';
import { Button } from '@/components/buttons/Button.jsx';



const Favoritos = () => {

    const { favoritos, getFavoritos, loading, error } = useFetchFavoritos()


    useEffect(() => {
        getFavoritos()
    }, [])

    console.log(favoritos)

    return (


        <>

           
           <div className="Header-main">
            <Header />

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

                                    <div className="Mensaje-listas">
                                    <p className="Mensaje">No hay favoritos disponibles, ¿perteneces a SOUNDsLike?</p>
                                    <div className="Mensaje-botones">
                                    <NavLink to='/registro'><Button >Regístrate</Button></NavLink>
                                    <NavLink to='/login'><Button variant = 'solid'>Iniciar sesion</Button></NavLink>
                                    </div>
                                   </div>


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

<BottomNavigation />
                </div>


          

       


        </>


    );
}

export default Favoritos;