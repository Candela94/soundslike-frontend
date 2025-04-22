
import './perfil.css'

import { GoHeart } from "react-icons/go";

import { FaRegUser } from "react-icons/fa6";


import { BsMusicNoteList } from "react-icons/bs";
import { FaUserPen } from "react-icons/fa6";

import { useContext } from 'react';
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router';
import { Button } from '../../components/buttons/Button';


const MiMusica = () => {

    const { userData } = useContext(UserContext)

    console.log("userData en Perfil:", userData);







    return (
        <>
           

                <div className="Main-perfil">



                    <div className="Perfil">


                        <h1 className='Nombre-usuario'>¡Hola!,  {userData && userData.username ? userData.username : 'Usuario'}</h1>


                    </div>


                    <section className="Perfil-contenido">




                        <ul className="Perfil-opciones">



                            <li>
                                <NavLink to='/perfil'> <div className='Perfil-item'>
                                    <FaUserPen />

                                    <p className="Perfil-texto">Mi perfil </p>
                                </div></NavLink>
                            </li>

                            <li>
                                <NavLink to='/mimusica'> <div className='Perfil-item'>
                                    <GoHeart />
                                    <p className="Perfil-texto">Mi música</p>
                                </div></NavLink>
                            </li>

                        </ul>


                        <ul className="Perfil-infoUl Perfil-musica">



                            <li>
                                <NavLink to='/bibliotecas'>   <div className='Perfil-item'>

                                    <BsMusicNoteList />

                                    <p className="Perfil-texto">Mis listas </p>
                                </div></NavLink>
                            </li>

                            <li>
                                <NavLink to='/favoritos'> <div className='Perfil-item'>

                                    <GoHeart />

                                    <p className="Perfil-texto">Mis favoritos</p>

                                </div></NavLink>

                            </li>







                          <NavLink to='/buscador'>  <div className='Perfil-botones'>


                                <Button variant='solid'>Buscar más canciones</Button>


                            </div></NavLink>












                        </ul>

                    </section>


                </div>
          
        </>
    );
}

export default MiMusica;