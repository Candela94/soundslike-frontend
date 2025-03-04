



import './cards.css'
import { Button } from '../buttons/Button';
import { FaPlay } from "react-icons/fa6";
import { TbMoodHappy } from "react-icons/tb";
import { ImSleepy } from "react-icons/im";

export const CardTendencias = () => {
    return ( 
        <>

        <div className="Card">
            <img src="../../../public/img/img1.png" alt="" className="Card-img" />

            <div className="Card-informacion">
                <h3 className="Card-nombre">Nombre</h3>
                <p className="Card-grupo">Grupo</p>
            </div>
            <div className="Boton">

           <Button className='btnCard' variant='solid'><FaPlay /> </Button>
           </div>
        </div>
        </>

     );
}



export const CardAnimo = ({variant,children, h3, icon  }) => {
  
   
   
const card = () => {

    switch(variant){

        case 'relax': return 'relaxMode'
      

    
        case 'concentrated' : return 'concentratedMode'
     

        case 'energy' : return 'energyMode'
       
     
        case 'melancoly': return 'melancolyMode'
      

        default: 
      

    }

}
   
const cardClass = card();

    return ( 

        <>
    <div className={`Card-animo ${cardClass}`}>

    <div className="Card-animoIcon">{icon} 
     <h3 className="text">{children}</h3></div>
     </div>



        </>
     );
}