import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
// import {MenuIcon} from '@mui/icons-material/Menu';

type itemsPrp = {
  ArrUsers:any[]
}

function Header({ArrUsers}:itemsPrp) {
  const [Name,setName]=useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUser_id()
  },[])

  const getUser_id = () => {
    const getUsers = window.localStorage.getItem("users");
    const LoggedUser = window.localStorage.getItem("LoggedUser");
      
    if(getUsers){
      ArrUsers = JSON.parse(getUsers);
    }
  
    for(let i=0;i<ArrUsers.length;i++){
        if(ArrUsers[i].email==LoggedUser){
            setName(ArrUsers[i].username)
        }   
       
    }
    }

    const logout = () => {
       window.localStorage.removeItem("LoggedUser");
       navigate("/")
    }

  return (
    <div className="header">
        <div className="row align-items-center">
          <div className="col-md-5">
            bars
          </div>
          <div className="col-md-5">
             <h3>soptify</h3>
          </div>
          <div className="col-md-2">
             <p>welcome {Name}, <a href="" onClick={logout}>logout</a></p>
          </div>
        </div>
    </div>
  )
}

export default Header