import { useState } from "react";
import { Button } from "../../components/buttons/Button";
import { Header } from "../../components/header/Header";

import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";

const LogIn = () => {

    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("")
    
    
    const userData = { email, password}

   

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

            <h1 className="Formulario-h1">Log in</h1>

              
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="mail" className="Formulario-mail Formulario-input" placeholder="email" />
                
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="Formulario-password Formulario-input" placeholder="Password" />
 
                <input onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} type="password" className="Formulario-password Formulario-input" placeholder="Repeat password" />

                <div className="Formulario-botones">
                    <Button variant='secondary'>Todavía no soy usuario</Button>
                    <Button type='submit' variant='primary'>Iniciar sesión</Button>
                </div>

            </form>
            </main>
</div>
            <BottomNavigation />
            </>
    )
}
 
export default LogIn;