
import './log-in.css'
import { Button } from '../../components/buttons/Button';
import { useState, useContext, useEffect } from 'react';
import {UserContext} from '../../context/UserContext.jsx'





const LogIn = () => {

    const [nombre, setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("")
    const [user,setUser] = useState("")

    
    const userData = {nombre, email, password, user}

   

    const handleEnviar = (e) => {
        e.preventDefault();
        LogIn(userData)
    }

    return (
        <>

        <main className="Main-login">
            <form action="GET" onSubmit={handleEnviar} className="Formulario">

            <h1>Log in</h1>

                <input onChange={(e) => setNombre(e.target.value) } value={nombre} type="text" className="Formulario-nombre Formulario-input" placeholder="Nombre" />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="mail" className="Formulario-mail Formulario-input" placeholder="email" />
                <input onChange={(e) => setUser(e.target.value)} value={user} type="text" className="Formulario-userName Formulario-input" placeholder="Nombre de usuario" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="Formulario-password Formulario-input" placeholder="Contraseña" />
 
                <input onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} type="password" className="Formulario-password Formulario-input" placeholder="Repite la contraseña" />

                <div className="Formulario-botones">
                    <Button type='submit' variant='primary'>Registrarme</Button>
                </div>

            </form>
            </main>
        </>
    );
}

export default LogIn;
