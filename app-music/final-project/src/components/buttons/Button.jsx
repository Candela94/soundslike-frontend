
import './buttons.css'



export const Button = ({variant, children}) => {

    const btnClass = () => {

        switch(variant){
            
            case 'focus' : return 'btn-focus';
            case 'primary' : return 'btn-primary';
            case 'secondary' : return 'btn-secondary';
            case 'danger' : return 'btn-danger';
            case 'disabled' : return 'btn-disabled';
            case 'solid' : return 'btn-solid';

            default: return 'primary'



        }
    }


    return ( 



        <>
         <button className={`btnClass ${btnClass()}`}>{children}</button>

</>
    )

}