
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
import { Header } from '../../components/header/Header';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router';
import { Button } from '../../components/buttons/Button';
import { useEliminarUsuario } from '../../../hooks/useEliminar';


const Perfil = () => {

    const { userData, LogOut } = useContext(UserContext)
    const { eliminarUsuario, eliminado } = useEliminarUsuario()

    const [confirmacion, setConfirmacion] = useState(false)

    console.log("userData en Perfil:", userData);



    const handleConfirmar = () => {
        setConfirmacion(!confirmacion)
    }


    const handleCancelarConfirmacion = () => {
        setConfirmacion(false)


    }



    const handleEliminar = () => {

        const userId = localStorage.getItem('userId')


        if(userId){
            console.log('eliminando usuario con id:', userId);
            eliminarUsuario({id:userId});
            setConfirmacion(false)


            //limpiamos localStorage 
            localStorage.removeItem('userId');
         localStorage.removeItem('userData');
         localStorage.removeItem('token');
         localStorage.removeItem('userRole');

         LogOut()


        } else {
            console.error('No se pudo obtener el ID del usuario')
        }
       

    }

    if (eliminado) {
        return null;
    }




    return (
        <>
            

                <div className="Main-perfil">



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

                                        <p className="Perfil-texto">{userData && userData.nombre ? userData.nombre : 'Usuario'} </p>
                                    </div>
                                </li>

                                <li>
                                    <NavLink to='/favoritos'> <div className='Perfil-item'>
                                        <FaUser />
                                        <p className="Perfil-texto">{userData && userData.username ? userData.username : 'Usuario'}</p>
                                    </div></NavLink>
                                </li>


                                <li>
                                    <NavLink to='/favoritos'> <div className='Perfil-item'>
                                        <MdOutlineEmail />
                                        <p className="Perfil-texto">{userData && userData.email ? userData.email : 'Usuario'}</p>
                                    </div></NavLink>
                                </li>





                                <div onClick={handleEliminar}className='Perfil-botones'>

                                    <Button variant='danger'>Eliminar cuenta</Button>
                                </div>


                                {
                                    confirmacion && (
                                        <div className="Confirmacion-contenido">
                                            <IoClose onClick={handleCancelarConfirmacion} className="Confirmacion-close" />
                                            <p>¿Estás segurx de que quieres abandonarnos?</p>


                                            <div onClick={handleEliminar} variant="danger">
                                                <p>Eliminar cuenta</p>
                                            </div>

                                        </div>
                                    )
                                }












                            </ul>

                        </div>





                    </section>


                </div>
        
        </>
    );
}

export default Perfil;