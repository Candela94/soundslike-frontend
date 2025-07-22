
import './menu.css'
import { NavLink, useNavigate } from 'react-router';
import { FaUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";
import { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { NotificacionesContext } from '../../context/NotificacionesContext';
import { PlayerContextProvider } from '../../context/PlayerContext';





export const MenuLateral = ({opened, onClose}) => {

const {LogOut, userData} =useContext(UserContext)
const {mostrarNotificacion} = useContext(NotificacionesContext)
const navigate = useNavigate()

const menuRef = useRef(null)







const handleLogut= () => {


    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    LogOut()

    mostrarNotificacion("info", '¡Hasta pronto!')
   
    navigate("/login")
    onClose();
   

   
}




const handleLogin = () => {
    onClose();
    navigate("/login");
};



//useEffect para hacer click al body y que el menú se cierre 

useEffect(() => {


    const handleClickOutside = (e) => {


        if(menuRef.current && !menuRef.current.contains(e.target)) {

            onClose()
        }


    }


    if(opened) {

        document.addEventListener('mousedown', handleClickOutside)
    }






}, [opened, onClose])





    return ( 



        <>

        <div className= {`Menu-lateral ${opened ? 'open' : ''}`} ref={menuRef}> 

            <ul className="Menu-lateralUl">

            <li className="Menu-lateralLi"><NavLink to="/perfil">
                <div className="Nav-content" onClick={onClose}>
                <FaUser />
                <p>Mi perfil </p>
                </div>
            </NavLink>
            </li>


          



            <li className="Menu-lateralLi"><NavLink to="/info">
                <div className="Nav-content" onClick={onClose}>
                <FaQuestion />
                <p>Información</p>
                </div>
            </NavLink>
            </li>


            <li className="Menu-lateralLi"><NavLink to="/login">
                <div className="Nav-content" onClick={userData? handleLogut : handleLogin}>
                <LuLogOut />
                <p>{userData? 'Log out' : 'Log in'}</p>
                </div>
            </NavLink>
            </li>





            </ul>
        </div>



        </>


     );
}