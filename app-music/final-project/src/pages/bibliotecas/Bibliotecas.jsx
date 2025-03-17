


import './bibliotecas.css'

import { useState } from 'react';
import { BsMusicNoteList } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { Cancion } from '../../components/cancion/Cancion';

const Bibliotecas = ({ icon, biblioteca }) => {



    const [secciones, setSecciones] = useState("misBibliotecas")



    const handleSeccion = (menu) => {
        setSecciones(menu)
    }



    return (
        <>


        

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
                                <svg width="14" height="17" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.21436 50.6786V78.3214M36.8572 27.6428V101.357M64.5001 4.60712V124.393M92.1429 27.6428V101.357M119.786 50.6786V78.3214" stroke="#EEAA6F" strokeWidth="9.21429" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='Subheader-p'>Mis  SoundLike</p>
                            </div>
                        </li>


                    </ul>
                </nav>
            </header>

            <main className="Main-bibliotecas">

                {secciones === 'misBibliotecas' && (

                    <div className="Bibliotecas">
                        <h1>Bibliotecas</h1>
                    </div>


                )}


                {secciones === 'misFavoritos' && (

                    <div className="Bibliotecas">
                        <h1>Favoritos</h1>

                        <div className="Galeria-canciones">
                    <Cancion />
                        </div>
                    </div>


                )}



                {secciones === 'misSoundsLike' && (

                    <div className="Bibliotecas">
                        <h1>SoundsLike</h1>
                    </div>


                )}



            </main>
        </>
    );
}

export default Bibliotecas;