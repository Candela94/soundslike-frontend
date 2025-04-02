

import { createContext, useState, useContext } from "react";


//1. Creamos el contexto
export const UserContext = createContext();


//2. Componente que envuelve el contexto (componente principal)

export const UserContextProvider = ({children}) => {

const [user, setUser] = useState(null)

const LogIn = (userData) => setUser(userData)
const LogOut = () => setUser(null)




    return(
        <UserContext.Provider value={{user, LogIn, LogOut}}>
            {children}
        </UserContext.Provider>
    )
}
