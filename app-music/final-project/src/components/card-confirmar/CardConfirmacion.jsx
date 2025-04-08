
import './cardcofirmacion.css'
import { Button } from '../buttons/Button.jsx';



export const CardConfirmacion = ({children}) => {
    return ( 

        <>
        <div className="Card-confirmacion">
            <p>{children}</p>

            <div className="Botones">
                <Button>Botón 1</Button>
                <Button>Botón 2</Button>
            </div>
        </div>

        </>
     );
}