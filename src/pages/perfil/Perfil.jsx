
import './perfil.css'
import { TbContract } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { MdOutlinePayments } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Header } from '@/components/header/Header';
import { BottomNavigation } from '@/components/bottom-navigation-header/BottomNavigation';
import { UserContext } from '../../context/UserContext';
import { NavLink, useRevalidator } from 'react-router';
import { Button } from '@/components/buttons/Button';
import { FiEdit } from "react-icons/fi";
import { useUpdate } from '../../../hooks/useUpdate';



const Perfil = () => {

    const { userData, setUserData } = useContext(UserContext)
    const userId = localStorage.getItem('userId');

    const { updateUsuario, loading, error } = useUpdate();
   



    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({
        nombre: '',
        username: '',
        email: ''
    });

    console.log("userData en Perfil:", userData);



    useEffect(() => {

        if(userData) {

            setEditData({
                nombre: userData.nombre || '',
                username:userData.username || '',
                email:userData.email || ''

            })
        }
    }, [userData])




    const handleChange = (e) => {

        const {value, name} = e.target;
        setEditData(prev => ({...prev, [name] : value}))
    }

    const handleGuardar = async (e) => {
        e.preventDefault();
        await updateUsuario(userId, editData);
        
        const updatedUser = {
            ...userData,
            ...editData
        };
    
        setUserData(updatedUser);
        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setEditing(false);
    };
    





    return (
        <>

            <div className="Header-main">
                <Header />

                <main className="Main-perfil">



                    <div className="Perfil">


                        <h1 className='Nombre-usuario'>Tu perfil, {userData?.username || 'Usuario'}</h1>


                    </div>


                    <form className="Perfil-contenido" onSubmit={handleGuardar}>

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
                                                        className='Formulario-input'
                                                    />
                                                ) : (
                                                    <p className="Perfil-texto">{editData.nombre}</p>
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
                                                        className='Formulario-input'
                                                    />
                                                ) : (
                                                    <p className="Perfil-texto">{editData.username}</p>
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
                                                        className='Formulario-input'
                                                    />
                                                ) : (
                                                    <p className="Perfil-texto">{editData.email}</p>
                                                )}
                                            </div>





                                        </div>
                                    </div>
                                </li>









                            </ul>
                           

                        </div>


                        {editing ? (

                            <div style={{ display: 'flex', gap: '3rem' , width: '100%', justifyContent:'center'}}>


<Button variant='secondary' onClick={() => setEditing(false)}>
                                    Cancelar
                                </Button>
                                <Button type="submit" variant='primary'>
                                    {loading ? 'Guardando...' : 'Guardar'}
                                </Button>
                               
                            </div>
                        ) : (

                            <div className="Boton-editar">
                            <button className= 'Btn-edit' type='button' variant='primary' onClick={() => {
                                
                                console.log("Click en Editar"); // 👈 prueba

                                setEditing(true)}}>
                                <FiEdit /> <p className="Btn">Editar</p>
                            </button></div>
                        )}

                        {error && <p style={{ color: 'red' }}>{error}</p>}










                    </form >
                </main>

<BottomNavigation />

            </div>








        </>
    );
}

export default Perfil;