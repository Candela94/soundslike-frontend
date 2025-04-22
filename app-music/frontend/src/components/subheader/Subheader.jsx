

import './subheader.css'
import { BsMusicNoteList } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router';


const SubHeader = () => {
    return (
        <>

            <header className="SubHeader">
                <nav className="Subheader-nav">
                    <ul className="Subheader-ul">

                        <NavLink to='/bibliotecas'><li className="Subheader-li">
                            <div className="Subheader-content">
                                <BsMusicNoteList />
                                <p className='Subheader-p'>Mis listas</p>
                            </div>
                        </li></NavLink>





                        <NavLink to='/favoritos'><li className="Subheader-li">
                            <div className="Subheader-content">
                                <GoHeart />
                                <p className='Subheader-p'>Mis favoritos</p>
                            </div>
                        </li></NavLink>


                      

                    </ul>
                </nav>
            </header>

        </>
    );
}

export default SubHeader;