import './home.css';

import { CardTendencias, CardRecomendaciones } from '@/components/cards/Cards';
import { Header } from '@/components/header/Header';
import { BottomNavigation } from '@/components/bottom-navigation-header/BottomNavigation';
import { Button } from '@/components/buttons/Button';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { NavLink } from 'react-router';
import { useContext, useEffect, useState, useRef } from 'react';
import { UserContext } from '@/context/UserContext';

import { useFetchPlayLists, useFetchPlayListsId } from '../../../hooks/useFetch';
import { useFetchSongsList } from '../../../hooks/usefetchSongs';

const Home = () => {
    const { userData } = useContext(UserContext);
    const { playlist, loading, error } = useFetchPlayLists();
    const { obtenerPlaylistPorId } = useFetchPlayListsId();

    const pid = '686d84680f187a8a65a36caa';
    const { canciones } = useFetchSongsList(pid);

    const seccionRef = useRef(null);
    const recomendacionesRef = useRef(null);

    // Estados para flechas de Tendencias
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // Estados para flechas de Recomendaciones
    const [showLeftArrowRecom, setShowLeftArrowRecom] = useState(false);
    const [showRightArrowRecom, setShowRightArrowRecom] = useState(true);

    useEffect(() => {
        if (pid) {
            obtenerPlaylistPorId(pid);
        }
    }, [pid]);

    // Scroll - Tendencias
    const handleScroll = () => {
        const el = seccionRef.current;
        if (!el) return;
        const scrollLeft = el.scrollLeft;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        setShowLeftArrow(scrollLeft > 10);
        setShowRightArrow(scrollLeft < maxScrollLeft - 10);
    };

    const scrollLeft = () => {
        seccionRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
        setTimeout(handleScroll, 100);
    };

    const scrollRight = () => {
        seccionRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(handleScroll, 100);
    };



    
    // Scroll - Recomendaciones
    const handleScrollRecom = () => {
        const el = recomendacionesRef.current;
        if (!el) return;
        const scrollLeft = el.scrollLeft;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        setShowLeftArrowRecom(scrollLeft > 10);
        setShowRightArrowRecom(scrollLeft < maxScrollLeft - 10);
    };

    const scrollLeftRecom = () => {
        recomendacionesRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
        setTimeout(handleScrollRecom, 100);
    };

    const scrollRightRecom = () => {
        recomendacionesRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(handleScrollRecom, 100);
    };







    // Effects para los listeners de scroll
    useEffect(() => {
        const el = seccionRef.current;
        if (!el) return;
        el.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamada inicial
        return () => el.removeEventListener('scroll', handleScroll);
    }, [canciones]); // Agregar canciones como dependencia

    useEffect(() => {
        const el = recomendacionesRef.current;
        if (!el) return;
        el.addEventListener('scroll', handleScrollRecom);
        handleScrollRecom(); // Llamada inicial
        return () => el.removeEventListener('scroll', handleScrollRecom);
    }, [playlist]); // Agregar playlist como dependencia

    return (
        <div className="Header-main">
            <Header />
            <main className="Main-home">
                <h1 className='Main-intro'>
                    {userData?.username ? `¡Hola, ${userData.username}! ¿Qué te gustaría escuchar hoy?` : `¡Hola! Qué te gustaría escuchar hoy?`}
                </h1>

                {/* Sección Tendencias */}
                <section className="Seccion-tendencias">

                    <h2 className='Main-subheading'>Lo último en SOUNDsLike</h2>


                    <div className="Galeria">


                        {loading ? (
                            <p>Cargando...</p>
                        ) : error ? (
                            <p>Error al cargar las listas</p>


                        ) : canciones?.length > 0 ? (


                            <div className="Galeria-tendenciasSlider">



                                <ul className="Galeria-tendencias" ref={seccionRef}>
                                    {canciones.map((song, index) => (

                                        <li key={song._id} className="Galeria Galeria-li">

                                            <CardTendencias
                                                imagen={song.imagen}
                                                nombre={song.nombre}
                                                artista={song.artista}
                                                audio={song.audio}
                                                _id={song._id}
                                                allSongs={canciones}
                                                index={index}
                                            />
                                        </li>
                                    ))}

                                </ul>



                                <div className="botones">
                                    {showLeftArrow && (
                                        <button className="Galeria-btn left" onClick={scrollLeft}>
                                            <FaAngleLeft />
                                        </button>



                                    )}
                                    {showRightArrow && (
                                        <button className="Galeria-btn right" onClick={scrollRight}>
                                            <FaAngleRight />
                                        </button>
                                    )}


                                    
                                </div>
                            </div>



                        ) : (
                            <p>No hay canciones</p>
                        )}
                    </div>
                </section>

                {/* Sección Listas */}
                <section className="Seccion-listas">


                    <div className="Listas-img">
                        <img src="../img/seccion-listas.jpg" alt="img" className="Listas-imagen" />
                        <div className="Listas-texto">
                            <h2 className='Listas-titulo'>Crea tus propias listas</h2>


                            <div className="Listas-btn">


                                <NavLink to='/bibliotecas'>
                                    <Button variant='secondary'>Ir a mis listas</Button>
                                </NavLink>


                                <NavLink to='/playlist'>
                                    <Button variant='solid'>Crear una lista</Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>







                {/* Sección Recomendaciones */}

                <section className="Recomendaciones">
                    <h2 className='Main-subheading'>Hecho para ti</h2>
                    <div className="Galeria-recomendaciones">


                        {loading ? (
                            <p>Cargando...</p>


                        ) : error ? (


                            <p>Error al cargar las listas</p>


                        ) : playlist.length > 0 ? (


                            <div className="Galeria-recomSlider">


                                <ul className="Galeria-ulRecomendaciones" ref={recomendacionesRef}>
                                    {playlist.map((list) => (
                                        <li key={list._id} className="Galeria Galeria-li">
                                            <NavLink to={`/playlists/${list._id}`}>
                                                <CardRecomendaciones img={list.coverImage} mix={list.nombre} />
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>



                                <div className="botones-recom">


                                    {showLeftArrowRecom && (
                                        <button className="Galeria-btn left" onClick={scrollLeftRecom}>
                                            <FaAngleLeft />
                                        </button>
                                    )}



                                    {showRightArrowRecom && (
                                        <button className="Galeria-btn right" onClick={scrollRightRecom}>
                                            <FaAngleRight />
                                        </button>
                                    )}



                                </div>
                            </div>
                        ) : (
                            <p>No hay playlists</p>
                        )}
                    </div>
                </section>










                {/* Imagen CTA */}


                <section className="Seccion-imagen">



                    <img src="../img/cta.jpg" alt="imgCta" className="Img-cta" />
                    <div className="Sounds-cta">
                        <h1 className="Soundslike">SOUNDsLike</h1>
                        <h4 className='Sounds-texto'>Para los amantes de la música</h4>
                        <div className="Sounds-enlace">
                            <NavLink to='/buscador'>
                                <Button variant='solid'>Buscar canciones</Button>
                            </NavLink>
                        </div>
                    </div>



                </section>
            </main>



            <BottomNavigation />
        </div>
    );
};

export default Home;