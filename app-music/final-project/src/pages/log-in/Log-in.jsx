
import './log-in.css'
import { Button } from '../../components/buttons/Button';
import { useState, useContext } from 'react';
import {userContext} from '../../context/UserContext.jsx'





const LogIn = () => {

    const [nombre, setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("")
    const [user,setUser] = useState("")

    const handleEnviar = (e) => {
        e.preventDefault();
    }

    return (
        <>

        <main className="Main-login">
            <form action="GET" className="Formulario">

            <h1>Log in</h1>

                <input value={nombre} type="text" className="Formulario-nombre Formulario-input" placeholder="Nombre" />
                <input value={} type="mail" className="Formulario-mail Formulario-input" placeholder="email" />
                <input value={} type="text" className="Formulario-userName Formulario-input" placeholder="Nombre de usuario" />
                <input value={} type="password" className="Formulario-password Formulario-input" placeholder="Contraseña" />

                <input type="password" className="Formulario-password Formulario-input" placeholder="Repite la contraseña" />

                <div className="Formulario-botones">
                    <Button variant='primary'>Registrarme</Button>
                </div>

            </form>
            </main>
        </>
    );
}

export default LogIn;
