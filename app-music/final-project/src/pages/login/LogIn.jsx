import { useState, useContext } from "react";
import { Button } from "../../components/buttons/Button";
import { Header } from "../../components/header/Header";
import { Notificaciones } from "../../components/notificaciones-success-error/Notificaciones.jsx";
import { NotificacionesContext } from "../../context/NotificacionesContext";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";
import { NavLink } from "react-router";

const LogIn = () => {


    const VITE_URL = import.meta.env.VITE_URL
    const {mostrarNotificacion} = useContext(NotificacionesContext)

    const [data, setData] = useState({

        email: "",
        password: "",


    })

    
    const handleChange = async (e) => {
        const {name, value} = e.target;
        setData((prev) => ({...prev, [name]: value}))
    }


    const handleLogIn = async (e) => {
        e.preventDefault();

        if(!data.email || !data.password) {
            mostrarNotificacion("error", "Por favor, completa todos los datos")
        }

        //Añadir aqui la validacion de la contraseña con la que se ha registrado el usuario 


        try {


            const response = await fetch(`${VITE_URL}/api/v1/usuarios/login`, {
                method:'GET',
                headers: {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    email:data.email,
                    password:data.password
                })
            })

            const datos = await response.json();
            console.log('Response:' , response)
            console.log('Datos:' , datos)

            if(response.ok) {
                localStorage.setItem('token', result.token)
                mostrarNotificacion("success", "Iniciaste sesión correctamente")

            } else {
                mostrarNotificacion("error" , "Vaya, algo salió mal")
            }


        } catch (e) {




        }


    }

    return (
        <>
            <div className="Header-main">
                <Header />
                <main className="Main-login">
                <div className="Notificacion-container">
                        <Notificaciones />
                    </div>
                    <form  onSubmit={handleLogIn} className="Formulario">

                        <h1 className="Formulario-h1">Log in</h1>


                        <input onChange={handleChange} type="mail" className="Formulario-mail Formulario-input" placeholder="email"  value={data.email}/>

                        <input onChange={handleChange} type="password" className="Formulario-password Formulario-input" placeholder="Password" value={data.password} />

                        

                        <div className="Formulario-botones">
                            <Button variant='secondary'>Regístrate</Button>
                            <Button type='submit' variant='solid'>Iniciar sesión</Button>
                        </div>

                    </form>
                </main>
            </div>
            <BottomNavigation />
        </>
    )
}

export default LogIn;