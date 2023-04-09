import {useState} from "react";
import { createContext } from "react";

export type LoggedUser = {
  name:string,
  email:string

}

type UserContextProviderPrps = {
   children:React.ReactNode
}

type UserContextType = {
    user:LoggedUser | null
    setUser:React.Dispatch<React.SetStateAction<LoggedUser | null>>
}

export const UserContext = createContext({} as UserContextType);


export const UserContextProvider = ({children}:UserContextProviderPrps) => {
   const [user,setUser]=useState<LoggedUser | null>(null);

   return (
       <UserContext.Provider value={{user,setUser}}>
          {children}
       </UserContext.Provider>
    )
 
}