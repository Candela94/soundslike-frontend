
import './menu.css'
import { NavLink, useNavigate } from 'react-router';
import { FaUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NotificacionesContext } from '../../context/NotificacionesContext';




export const MenuLateral = ({opened}) => {

const {LogOut} =useContext(UserContext)
const {mostrarNotificacion} = useContext(NotificacionesContext)
const navigate = useNavigate()


const handleLogut= () => {
    LogOut()
    localStorage.removeItem("token");
    navigate('/')
   
}

    return ( 



        <>

        <div className= {`Menu-lateral ${opened ? 'open' : ''}`}> 

            <ul className="Menu-lateralUl">

            <li className="Menu-lateralLi"><NavLink to="/perfil">
                <div className="Nav-content">
                <FaUser />
                <p>Mi perfil </p>
                </div>
            </NavLink>
            </li>


            <li className="Menu-lateralLi"><NavLink to="">
                <div className="Nav-content">
                <FiSettings />
                <p>Configuración </p>
                </div>
            </NavLink>
            </li>



            <li className="Menu-lateralLi"><NavLink to="/info">
                <div className="Nav-content">
                <FaQuestion />
                <p>Información</p>
                </div>
            </NavLink>
            </li>


            <li className="Menu-lateralLi"><NavLink to="">
                <div className="Nav-content" onClick={handleLogut}>
                <LuLogOut />
                <p>Log out</p>
                </div>
            </NavLink>
            </li>





            </ul>
        </div>



        </>


     );
}