

import './home.css'

import { CardTendencias } from '@/components/cards/Cards';
import { Header } from '@/components/header/Header';
import { BottomNavigation } from '@/components/bottom-navigation-header/BottomNavigation';

import { IoMdHappy } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { FaBoltLightning } from "react-icons/fa6";
import { MdNightlight } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { Button } from '@/components/buttons/Button';
import { MdOutlineNorthEast } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import { CardRecomendaciones } from '@/components/cards/Cards';


import { NavLink } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/UserContext';

import { useFetchPlayLists, useFetchPlayListsId } from '../../../hooks/useFetch';
import { useFetchSongs, useFetchSongsList } from '../../../hooks/usefetchSongs';






const Home = () => {

    const { userData } = useContext(UserContext)
    const { playlist, loading, error } = useFetchPlayLists()

    const { playlistId, obtenerPlaylistPorId } = useFetchPlayListsId()


    const pid = '686d84680f187a8a65a36caa';
    const { canciones } = useFetchSongsList(pid)

    console.log(import.meta.env.VITE_URL);





    useEffect(() => {
        if (pid) {
            obtenerPlaylistPorId(pid);
        }
    }, [pid]);






    console.log(userData)

    return (
        <>

        <div className="Header-main">
           <Header/>
                <main className="Main-home">

                    <h1 className='Main-intro'>
                        {
                            userData && userData.nombre

                                ? `¡Hola, ${userData.nombre}! ¿Qué te gustaría escuchar hoy?` : `¡Hola! Qué te gustaría escuchar hoy?`
                        }
                    </h1>

                 

                    <section className="Seccion-tendencias">
                        <h2 className='Main-subheading'>Lo último en SOUNDsLike</h2>
                        <div className="Galeria">

                            {
                                loading ? (
                                    <p>Cargando...</p>

                                ) : error ? (
                                    <p> Error al cargar las listas</p>


                                ) : canciones && canciones.length > 0 ? (

                                    <ul className="Galeria-tendencias">

                                        {
                                            canciones.map((song, index) => {
                                                console.log(song)
                                                return (
                                                    <li key={song._id
                                                    } className="Galeria Galeria-li">
                                                        <CardTendencias

                                                            imagen={song.imagen}
                                                            nombre={song.nombre}
                                                            artista={song.artista}
                                                            audio={song.audio}
                                                            _id={song._id}
                                                            allSongs = {canciones}
                                                            index = {index}
                                                           
                                                        />
                                                    </li>

                                                )
                                            })

                                        }


                                    </ul>
                                ) : (
                                    <p>No hay playlists</p>
                                )
                            }


                        </div>
                    </section>

                    <section className="Seccion-listas">

                        <div className="Listas-img">
                            <img src="../img/seccion-listas.jpg" alt="" className="Listas-imagen" />

                            <div className="Listas-texto">
                                <h2 className='Listas-titulo'>Crea tus propias listas</h2>
                                <div className="Listas-btn">
                                    <NavLink to='/bibliotecas'><Button variant='secondary'>Ir a mis listas</Button></NavLink>
                                    <NavLink to='/playlist'><Button variant='solid'>Crear una lista</Button></NavLink>
                                </div>
                            </div>
                        </div>


                       
                    </section>


                    <section className="Recomendaciones">
                        <h2 className='Main-subheading'>Hecho para ti</h2>

                        <div className=" Galeria-recomendaciones">


                            {
                                loading ? (
                                    <p>Cargando...</p>

                                ) : error ? (
                                    <p> Error al cargar las listas</p>


                                ) : playlist.length > 0 ? (

                                    <ul className="Galeria-ulRecomendaciones">

                                        {
                                            playlist.map((list) => {
                                                console.log(list)
                                                return (
                                                    <NavLink key={list._id} to={`/playlists/${list._id}`}> <li className="Galeria Galeria-li">
                                                        <CardRecomendaciones

                                                            img={list.coverImage}
                                                            mix={list.nombre}

                                                        />
                                                    </li></NavLink>

                                                )
                                            })

                                        }


                                    </ul>
                                ) : (
                                    <p>No hay playlists</p>
                                )
                            }
                        </div>
                    </section>


                    <section className="Seccion-imagen">

                        <img src="../img/cta.jpg" alt="imgCta" className="Img-cta" />
                        <div className="Sounds-cta">

                            <h1 className="Soundslike">SOUNDsLike</h1>

                            <h4 className='Sounds-texto'>Para los amantes de la música</h4>

                            <div className="Sounds-enlace">

                               <NavLink to='/buscador'> <Button variant='solid'>Buscar canciones</Button></NavLink>

                               
                            </div>

                        </div>

                    </section>




                </main>
                <BottomNavigation />

                </div>
        
        </>
    );
}

export default Home;