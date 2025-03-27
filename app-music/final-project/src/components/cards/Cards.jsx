



import './cards.css'
import { Button } from '../buttons/Button';
import { FaPlay } from "react-icons/fa6";



// Aqui tengo que poner props, esto es una prueba {img,h3,nombre}
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

           <Button  variant='solid'><FaPlay className='Boton-icon'/> </Button>
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
     <h5 className="text">{children}</h5></div>
     </div>



        </>
     );
}





export const CardRecomendaciones = ({h3, img, mix}) => {
    return ( 
        <>
        <div className="CardRecomendaciones">
         
            <img src="../../../public/img/sensenra.jpg" alt="img" className="CardRecomendaciones-img" />
          
            
            <div className="titulo">

                <h4>Mix {mix}</h4>
            </div>
        </div>
        </>
     );
}






