

import './header.css'
import { LiaUserSolid } from "react-icons/lia";
import { TbMenu4 } from "react-icons/tb";

import { useState } from 'react';

export const Header = () => {

    const [opened, setOpened] = useState(false)



    const handleOpen = () => {
        setOpened(!opened)
    }



    return ( 

        <>
    <header className="Header">
        <nav className="Header-nav">
            <ul className="Header-ul">
                 <li className="Header-li" onClick={handleOpen}><TbMenu4  className='Header-icon' /></li>
                <li className="Header-li"><LiaUserSolid className='Header-icon'  /></li>
            </ul>
        </nav>
    </header>

        </>
     );
}