


import './bibliotecas.css'

import { useState } from 'react';
import { BsMusicNoteList } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { Cancion , Listas} from '../../components/cancion/Cancion';
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { Button } from '../../components/buttons/Button.jsx';
import { NavLink } from 'react-router';
import { useFetch } from '../../../hooks/useFetch.jsx';
import { IoAddCircleSharp } from "react-icons/io5";


const Bibliotecas = ({ icon, biblioteca }) => {



    const [secciones, setSecciones] = useState("misBibliotecas")
    const {bibliotecas, loading, error } = useFetch()



    const handleSeccion = (menu) => {
        setSecciones(menu)
    }


    



    return (
        <>
 <div className="Header-main">
<Header />
        
        <div className="Contenido">

            <header className="SubHeader">
                <nav className="Subheader-nav">
                    <ul className="Subheader-ul">

                        <li className="Subheader-li">
                            <div onClick={() => handleSeccion("misBibliotecas")} className="Subheader-content">
                                <BsMusicNoteList />
                                <p className='Subheader-p'>Mis listas</p>
                            </div>
                        </li>





                        <li className="Subheader-li">
                            <div onClick={() => handleSeccion("misFavoritos")} className="Subheader-content">
                                <GoHeart />
                                <p className='Subheader-p'>Mis favoritos</p>
                            </div>
                        </li>


                        <li className="Subheader-li">
                            <div onClick={() => handleSeccion("misSoundsLike")} className="Subheader-content">
                                <svg className='Subheader-svg'  viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.21436 50.6786V78.3214M36.8572 27.6428V101.357M64.5001 4.60712V124.393M92.1429 27.6428V101.357M119.786 50.6786V78.3214"  strokeWidth="9.21429" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='Subheader-p'>Mis  SoundsLike</p>
                            </div>
                        </li>


                    </ul>
                </nav>
            </header>

            <main className="Main-bibliotecas">

                {secciones === 'misBibliotecas' && (

                    <div className="Bibliotecas">

                        <div className="Bibliotecas-intro">
                        <h1 className='Bibliotecas-titulo'>Mis listas</h1>
                        <NavLink to = '/playlist'><IoAddCircleSharp className='Bibliotecas-icono'/></NavLink>
                        </div>

                        <div className="Galeria-listas">
                       {
                        loading ? (
                            <div className="Loading">
                                <img src="../img/loading.gif" alt="loading" className="gif" />
                                <p>Cargando bibliotecas </p>
                            </div>
                        ) : error ? (
                            <p>Error al cargar las bibliotecas: {error} </p>
                        ) : bibliotecas.length > 0 ? (

                            bibliotecas.map((biblioteca) => (
                                <ul className='Galeria-ul'>
                                    <li className='Galeria-li'key={biblioteca._id}><Listas nombre={biblioteca.nombre} img={biblioteca.coverImage || '../img/sensenra.jpg'} /></li>
                                </ul>
                            ))

                            

                        ) : (
                            <p className='Galeria-mensaje'>No tienes bibliotecas creadas</p>
                        )
                       }
                        </div>
                       
                    </div>


                )}


                {secciones === 'misFavoritos' && (

                    <div className="Bibliotecas">
                        <h1 className='Bibliotecas-titulo'>Favoritos</h1>

                        <div className="Galeria-canciones">
                    <Cancion />
                        </div>

                       
                    </div>


                )}



                {secciones === 'misSoundsLike' && (

                    <div className="Bibliotecas">
                        <h1 className='Bibliotecas-titulo'>SoundsLike</h1>
                    </div>


                )}



            </main>
            </div>
            </div>
            <BottomNavigation />
        </>
    );
}

export default Bibliotecas;