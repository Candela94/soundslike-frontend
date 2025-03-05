
import './menu.css'
import { NavLink } from 'react-router';
import { FaUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";




export const MenuLateral = ({opened}) => {



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



            <li className="Menu-lateralLi"><NavLink to="">
                <div className="Nav-content">
                <FaQuestion />
                <p>Ayuda</p>
                </div>
            </NavLink>
            </li>


            <li className="Menu-lateralLi"><NavLink to="">
                <div className="Nav-content">
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