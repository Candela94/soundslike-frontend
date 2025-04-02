
import './registro.css'
import { Button } from '../../components/buttons/Button.jsx';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext.jsx'

import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';
import { useFetch } from '../../../hooks/useFetch.jsx';


const Registro = () => {

   

    const {login} = useContext(UserContext)

    const [formData, setFormData] = useState({

        nombre: "",
        email: "",
        password: "",
        repeatpass: "",
        user: ""

    })


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }



    //Hook useFetch para la creación del usuario
    const {datos, loading, error} = useFetch(formData)



    const handleEnviar = (e) => {
        e.preventDefault();
        
        //validar contraseña 
        if(formData.password !==formData.repeatpass) {
            alert('Las contraseñas no coinciden')
            return;
        }

    
    }


    // Después de que el usuario se haya registrado con éxito, si necesitas hacer login:
    useEffect(() => {
        if (datos && datos.status === 'ok') {
            login(datos.data); // Si el backend devuelve los datos del usuario, iniciamos sesión
        }
    }, [datos, login]); // Se ejecutará cuando 






    return (
        <>
            <div className="Header-main">
                <Header />
                <main className="Main-login">
                    <form action="GET" onSubmit={handleEnviar} className="Formulario">

                        <h1 className='Formulario-h1'>Registro</h1>

                        <input onChange={handleChange} value={formData.nombre} type="text" name='nombre' className="Formulario-nombre Formulario-input" placeholder="Name" />
                        <input onChange={handleChange} value={formData.email} type="mail" name='email' className="Formulario-mail Formulario-input" placeholder="email" />
                        <input onChange={handleChange} value={formData.user} type="text" name='user' className="Formulario-userName Formulario-input" placeholder="Username" />
                        <input onChange={handleChange} value={formData.password}  name='password'type="password" className="Formulario-password Formulario-input" placeholder="Password" />

                        <input onChange={handleChange} value={formData.repeatPassword}  name='repeatpass'type="password" className="Formulario-password Formulario-input" placeholder="Repeat password" />

                        <div className="Formulario-botones">
                            <Button type='submit' variant='primary'>Create account</Button>
                        </div>

                    </form>
                </main>
            </div>
            <BottomNavigation />
        </>
    );
}

export default Registro;
