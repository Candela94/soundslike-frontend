
import './buttons.css'



export const Button = ({variant, children, type = 'button', onClick}) => {

    const btnClass = () => {

        switch(variant){
            
            case 'focus' : return 'btn-focus';
            case 'primary' : return 'btn-primary';
            case 'secondary' : return 'btn-secondary';
            case 'danger' : return 'btn-danger';
            case 'disabled' : return 'btn-disabled';
            case 'solid' : return 'btn-solid';

            default: return 'btn-primary'



        }
    }


    return ( 



        <>
         <button onClick={onclick} className={`btn ${btnClass()}`}>{children}</button>

</>
    )

}