import {UserContext} from './UserContext'
import {useContext} from 'react'

function User() {
   const userContext=useContext(UserContext);
    const login = () => {
         if(userContext){
            userContext.setUser({name:"bilal",email:"bilal@dfdw.dfs"})
         }
   }  
   const logout = () => {
    if(userContext){
       userContext.setUser(null)
    }
}  
  return (
    <div>
        <button onClick={login}>login</button>
        <button onClick={logout}>log out</button>
       <h2> name is : {userContext.user?.name}</h2>
       <h2>  email is : {userContext.user?.email}</h2>
    </div>
  )
}

export default User