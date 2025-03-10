
import { CiMenuKebab } from "react-icons/ci";
import './cancion.css'


export const Cancion = ({titulo, artista,img}) => {
    return (
    
    
    <>
<div className="Cancion">

    <div className="Cancion-imgTexto">

    <img src={img} alt="portada" className="Cancion-img" />

    <div className="Cancion-info">
        <h4>{titulo}Titulo canción</h4>
        <p>{artista} Artista</p>
    </div>

    </div>

    <CiMenuKebab />

</div>

    </> 
    


);
}