
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

    const { userData, LogOut } = useContext(UserContext)
    const { eliminarUsuario, eliminado } = useEliminarUsuario()
    const { updateUsuario } = useUpdate();

    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({
        nombre: '',
        username: '',
        email: ''
    });

    const [confirmacion, setConfirmacion] = useState(false)

    console.log("userData en Perfil:", userData);






//Funcion para editar
    const handleEdit = (info) => {
        setEditing(true)
        setEditData({
            ...editData,
            [info]:userData[info]
        })
    }


    const handleChange = (e) => {
        editData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }




    const handleSave = async () => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            try {
                await updateUsuario(userId, editData); 
                setEditing(false); 
            } catch (error) {
                console.error("Error al actualizar usuario", error);
            }
        }
    };




    const handleCancel = () => {
        setEditing(false); 
    };



    


    const handleConfirmar = () => {
        setConfirmacion(!confirmacion)
    }


    const handleCancelarConfirmacion = () => {
        setConfirmacion(false)


    }



    const handleEliminar = () => {

        const userId = localStorage.getItem('userId')


        if (userId) {
            console.log('eliminando usuario con id:', userId);
            eliminarUsuario({ id: userId });
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


                                    <div className="Perfil-input">

                                        <div className="Perfil-informacion">
                                            <p className="Perfil-texto"> {
                                                userData && userData.nombre
                                            } </p>
                                        </div>
                                        

                                    </div>


                                </div>
                            </li>

                            <li>
                                <div className='Perfil-item'>
                                    <FaUser  />



                                    <div className="Perfil-input">
                                        <div className="Perfil-informacion">
                                            <p className="Perfil-texto"> {
                                                userData && userData.username
                                        }</p>
                                        </div>
                                       



                                       
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className='Perfil-item'>
                                    <MdOutlineEmail />


                                    <div className="Perfil-input">

                                        <div className="Perfil-informacion">
                                            <p className="Perfil-texto">{userData && userData.email} </p>
                                        </div>



                                

                                    </div>
                                </div>
                            </li>





                            <div onClick={handleConfirmar} className='Perfil-botones'>


                                <Button variant='secondary'>Eliminar cuenta</Button>
                            </div>
                             


                            {
                                confirmacion && (
                                    <div className="Confirmacion-contenido">
                                        <IoClose onClick={handleCancelarConfirmacion} className="Confirmacion-close" />
                                        <p className='Confirmacion-p'>¿Estás segurx de que quieres abandonarnos?</p>


                                        <div className='Confirmacion-btn' onClick={handleEliminar} >
                                            Eliminar cuenta
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