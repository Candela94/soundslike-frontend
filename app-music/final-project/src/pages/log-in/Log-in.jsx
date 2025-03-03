
import './log-in.css'
import { Button } from '../../components/buttons/Button';

const LogIn = () => {
    return (
        <>

        <main className="Main-login">
            <form action="GET" className="Formulario">

            <h1>Log in</h1>

                <input type="text" className="Formulario-nombre Formulario-input" placeholder="Nombre" />
                <input type="mail" className="Formulario-mail Formulario-input" placeholder="email" />
                <input type="text" className="Formulario-userName Formulario-input" placeholder="Nombre de usuario" />
                <input type="password" className="Formulario-password Formulario-input" placeholder="Contraseña" />

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
