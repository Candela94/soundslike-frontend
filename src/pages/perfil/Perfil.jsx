
import './perfil.css'
import { TbContract } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { MdOutlinePayments } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { UserContext } from '../../context/UserContext';
import { NavLink, useRevalidator } from 'react-router';
import { Button } from '../../components/buttons/Button';
import { useEliminarUsuario } from '../../../hooks/useEliminar';
import { FiEdit } from "react-icons/fi";
import { useUpdate } from '../../../hooks/useUpdate';



const Perfil = () => {

    const { userData } = useContext(UserContext)
  

    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({
        nombre: '',
        username: '',
        email: ''
    });

    console.log("userData en Perfil:", userData);







    // const handleConfirmar = () => {
    //     setConfirmacion(!confirmacion)
    // }


    // const handleCancelarConfirmacion = () => {
    //     setConfirmacion(false)


    // }



    // const handleEliminar = () => {

    //     const userId = localStorage.getItem('userId')


    //     if (userId) {
    //         console.log('eliminando usuario con id:', userId);
    //         eliminarUsuario({ id: userId });
    //         setConfirmacion(false)


    //         //limpiamos localStorage 
    //         localStorage.removeItem('userId');
    //         localStorage.removeItem('userData');
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('userRole');

    //         LogOut()


    //     } else {
    //         console.error('No se pudo obtener el ID del usuario')
    //     }


    // }

    // if (eliminado) {
    //     return null;
    // }




    return (
        <>

<div className="Header-main">

            <main className="Main-perfil">



                <div className="Perfil">


                    <h1 className='Nombre-usuario'>¡Hola!, {userData && userData.username ? userData.username : 'Usuario'}</h1>


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





                    <div className="Perfil-info">

                        <ul className="Perfil-infoUl">



                            <li>
                                <div className='Perfil-item'>
                                    <FaRegUser />


                                    <div className="Perfil-input">

                                        <div className="Perfil-informacion">
                                            {editing ? (
                                                <input
                                                    type="text"
                                                    name="nombre"
                                                    value={editData.nombre}
                                                    onChange={handleChange}
                                                    placeholder="Nombre"
                                                />
                                            ) : (
                                                <p className="Perfil-texto">{userData && userData.nombre}</p>
                                            )}
                                        </div>


                                    </div>


                                </div>
                            </li>

                            <li>
                                <div className='Perfil-item'>
                                    <FaUser />



                                    <div className="Perfil-input">
                                        <div className="Perfil-informacion">
                                            {editing ? (
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={editData.username}
                                                    onChange={handleChange}
                                                    placeholder="Nombre de usuario"
                                                />
                                            ) : (
                                                <p className="Perfil-texto">{userData && userData.username}</p>
                                            )}
                                        </div>





                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className='Perfil-item'>
                                    <MdOutlineEmail />


                                    <div className="Perfil-input">

                                        <div className="Perfil-informacion">
                                            {editing ? (
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={editData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                />
                                            ) : (
                                                <p className="Perfil-texto">{userData && userData.email}</p>
                                            )}
                                        </div>





                                    </div>
                                </div>
                            </li>









                        </ul>
                        <NavLink to='/edit'>  <Button variant='primary'><FiEdit /> Editar</Button></NavLink>

                    </div>











                </section >
            </main>


            </div>








        </>
    );
}

export default Perfil;