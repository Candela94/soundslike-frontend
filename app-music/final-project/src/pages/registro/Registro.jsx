
import './registro.css'
import { Button } from '../../components/buttons/Button.jsx';
import { useState, useContext, useEffect } from 'react';
import {UserContext} from '../../context/UserContext.jsx'

import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';


const Registro = () => {

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
         <div className="Header-main">
<Header />
        <main className="Main-login">
            <form action="GET" onSubmit={handleEnviar} className="Formulario">

            <h1 className='Formulario-h1'>Registro</h1>

                <input onChange={(e) => setNombre(e.target.value) } value={nombre} type="text" className="Formulario-nombre Formulario-input" placeholder="Name" />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="mail" className="Formulario-mail Formulario-input" placeholder="email" />
                <input onChange={(e) => setUser(e.target.value)} value={user} type="text" className="Formulario-userName Formulario-input" placeholder="Username" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="Formulario-password Formulario-input" placeholder="Password" />
 
                <input onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} type="password" className="Formulario-password Formulario-input" placeholder="Repeat password" />

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
