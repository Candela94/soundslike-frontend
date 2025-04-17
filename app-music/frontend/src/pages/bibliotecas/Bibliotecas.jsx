


import './bibliotecas.css'

import { useState } from 'react';
import { Cancion, Listas } from '../../components/cancion/Cancion';
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { Button } from '../../components/buttons/Button.jsx';
import { NavLink } from 'react-router';
import { useFetch } from '../../../hooks/useFetch.jsx';
import SubHeader from '../../components/subheader/Subheader.jsx';

import { IoAddCircleSharp } from "react-icons/io5";


const Bibliotecas = () => {



  

    const { bibliotecas, loading, error } = useFetch()


 



    return (
        <>

            <div className="Header-main">

                <Header />


                <div className="Contenido">

                    <div className="Subheader-intro">
                        <SubHeader />
                        <div className="Bibliotecas-intro">
                            <h1 className='Bibliotecas-titulo'>Mis listas</h1>
                            <NavLink to='/playlist'><IoAddCircleSharp className='Bibliotecas-icono' /></NavLink>
                        </div>
                    </div>

                    <main className="Main-bibliotecas">



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


                                    <ul className='Galeria-ul'>
                                        {
                                            bibliotecas.map((playlist) => (

                                                  <li key={playlist._id} className='Galeria-li' ><Listas nombre={playlist.nombre} img={playlist.coverImage || '../img/sensenra.jpg'} pid={playlist._id}/></li>
                                            ))}
                                    </ul>



                                ) : (
                                    <p className='Galeria-mensaje'>No tienes bibliotecas creadas</p>
                                )
                            }
                        </div>











                    </main>
                </div>
            </div>


            <BottomNavigation />
        </>
    );
}

export default Bibliotecas;