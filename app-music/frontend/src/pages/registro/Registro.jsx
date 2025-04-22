
import './registro.css'
import { Button } from '../../components/buttons/Button.jsx';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext.jsx'

import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';
// import { useFetch } from '../../../hooks/useFetch.jsx';
import { NotificacionesContext } from '../../context/NotificacionesContext.jsx';
import { Notificaciones } from '../../components/notificaciones-success-error/Notificaciones.jsx';
import { useNavigate } from 'react-router';




const Registro = () => {

   
    const VITE_URL = import.meta.env.VITE_URL
    
    const navigate = useNavigate();
    const {LogIn} = useContext(UserContext)
    const {mostrarNotificacion} = useContext(NotificacionesContext)

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        username: ""

    })

    


    const handleChange = async (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }



    // //Hook useFetch para la creación del usuario
    // const {datos, loading, error} = useFetch(formData)



    const handleEnviar = async (e) => {
        e.preventDefault();


        //Validar todos los campos
        if (Object.values(formData).some((value) => value.trim() ==='')) {
            alert("Todos los campos son obligatorios")
        }
        
        //validar contraseña 
        if(formData.password.trim() !==formData.repeatPassword.trim()) {
            alert('Las contraseñas no coinciden')
            return;
        }

    
        try {
            const response = await fetch(`${VITE_URL}/api/v1/usuarios/register`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log('Response:' ,response)
            console.log('Data:' , data)
    
            if (response.ok) {


               mostrarNotificacion("success", "¡Te has registrado correctamente!")
               localStorage.setItem("token", data.token)
                LogIn({
                    nombre:data.user.name,
                    username: data.user.username,
                    email: data.user.email

                });
                navigate('/home')
            

            } else {
                mostrarNotificacion("error", "Ups, algo salió mal")
            }
        } catch (e) {
            console.error('Error al registrarse', e);
            mostrarNotificacion("error", "Ups, algo salió mal")
        }

    }    






    
   





    return (
        <>
            
                <main className="Main-login">
                    <div className="Notificacion-container">
                        <Notificaciones />
                    </div>
                    <form action="POST" onSubmit={handleEnviar} className="Formulario">

                        <h1 className='Formulario-h1'>Registro</h1>

                        <input onChange={handleChange} value={formData.name} type="text" name='name' className="Formulario-nombre Formulario-input" placeholder="Nombre" />
                        <input onChange={handleChange} value={formData.email} type="email" name='email' className="Formulario-mail Formulario-input" placeholder="email" />
                        <input onChange={handleChange} value={formData.username} type="text" name='username' className="Formulario-userName Formulario-input" placeholder="Nombre de usuario" />
                        <input onChange={handleChange} value={formData.password}  name='password'type="password" className="Formulario-password Formulario-input" placeholder="Contraseña" />

                        <input onChange={handleChange} value={formData.repeatPassword}  name='repeatPassword'type="password" className="Formulario-password Formulario-input" placeholder="Repite la contraseña" />

                        <div className="Formulario-botones">
                            <Button type='submit' variant='solid'>Crear cuenta</Button>
                        </div>

                    </form>
                </main>
           
        </>
    );
}

export default Registro;
