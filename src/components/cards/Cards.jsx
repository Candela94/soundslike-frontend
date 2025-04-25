



import './cards.css'
import { Button } from '../buttons/Button';
import { FaPlay } from "react-icons/fa6";
import { useContext } from 'react';

import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";
import { usePlayer } from "../../context/PlayerContext.jsx";
import { NotificacionesContext } from '../../context/NotificacionesContext.jsx';





export const CardTendencias = ({nombre, artista, imagen, audio, _id, allSongs, index}) => {

  
    const {loadList} = usePlayer()
    const {mostrarNotificacion} = useContext(NotificacionesContext)

    const imgDefault = '../img/default.jpg'


    const handlePlaySong = () => {
        if(!audio) {
            mostrarNotificacion('error', 'No hay audio disponible')
        }
        const selectedSong = {nombre, artista, imagen, audio, _id};
        loadList([selectedSong],0)
      
    }


    return (
        <>

            <div className="Card" onClick={handlePlaySong}>
                <div className="Card-image">
                <img src={imagen || imgDefault} alt="portada" className="Card-img" />
                </div>
              

                <div className="Card-informacion">
                    <h4 className="Card-nombre">{nombre}</h4>
                    <p className="Card-grupo">{artista}</p>
                </div>

            
            </div>
        </>

    );
}








export const CardRecomendaciones = ({ img, mix }) => {
    return (
        <>
            <div className="CardRecomendaciones">

                <img src={img} alt="img" className="CardRecomendaciones-img" />


                <div className="titulo">

                    <h4>{mix}</h4>
                </div>
            </div>
        </>
    );
}






