import { useEffect, useState } from "react";
import { useUpdate } from "../../../hooks/useUpdate";
import { FaUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { Button } from "@/components/buttons/Button";
import { Header } from "@/components/header/Header";
import { BottomNavigation } from "@/components/bottom-navigation-header/BottomNavigation";





const EditarPerfil = ({ userId }) => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    const { usuario, loading, error, updateUsuario } = useUpdate();



    useEffect(() => {

        if (usuario) {
            setNombre(usuario.nombre);
            setEmail(usuario.email);
            setUsername(usuario.username)
        }

    }, [usuario])



    //Función para cambiar los campos del fotmulario
    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name === 'nombre') setNombre(value);
        if (name === 'email') setEmail(value);
        if (name === 'username') setUsername(value);

    }



    //Funcuón para enviar 
    const handleSubmit = (e) => {

        e.preventDefault();

        const updateUser = { nombre, email, username }

        updateUsuario(userId, updateUser)
    }


    return (

        <>


            <div className="Header-Main">

                <Header />



                <div className="Main-perfil">
                    <section className="Perfil-contenido">




                        <form className="Perfil-info" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <div className='Perfil-item'>
                                <FaRegUser />
                                <div className="Perfil-input">
                                    <input className='Formulario-input'
                                        type="text"
                                        name="nombre"
                                        value={nombre}
                                        onChange={handleChange}
                                        placeholder="Nombre"
                                    />
                                </div>

                            </div>


                            <div className='Perfil-item'>
                                <FaUser />
                                <div className="Perfil-input">
                                    <input className='Formulario-input'
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={handleChange}
                                        placeholder="Nombre de usuario"
                                    />
                                </div>
                            </div>


                            <div className='Perfil-item'>
                                <MdOutlineEmail />
                                <div className="Perfil-input">
                                    <input className='Formulario-input'
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </div>
                            </div>






                            <Button variant='primary' onClick={handleSubmit}> {loading ? 'Guardando...' : 'Guardar'}</Button>

                        </form>



                    </section >
                </div>


                <BottomNavigation />
            </div>

        </>
    );
}

export default EditarPerfil;