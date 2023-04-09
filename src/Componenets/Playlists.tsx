import React,{FormEvent, useEffect, useState} from 'react'
import SideBar from './SideBar'
import img from '../Componenets/images/avatar-anisha.png'
import { useSelector,useDispatch } from 'react-redux';
import LoginSign from './LoginSign';
import { Link } from 'react-router-dom';
import Header from './Header';

type itemsPrp  = {
  ArrUsers:any[]
  data:any[]
  DataPlaylists:any[]
  FilterPlaylists:any[]
 }

function Playlists({ArrUsers,data,DataPlaylists}:itemsPrp) {
 const [image,setImage]=useState("");
 const [Title,setTitle]=useState("");
 const [UserId,setUserId]=useState(null);

 useEffect(() => {

  getUser_id()

  },[]);

const handlimg = (e:any) => {
        setImage(e.target.files[0])
 }   

 const getUser_id = () => {
  const getUsers = window.localStorage.getItem("users");
  const LoggedUser = window.localStorage.getItem("LoggedUser");
    
  if(getUsers){
    ArrUsers = JSON.parse(getUsers);
  }

  for(let i=0;i<ArrUsers.length;i++){
      if(ArrUsers[i].email==LoggedUser){
          setUserId(ArrUsers[i].id)    
      }   
     
  }
  }

  //getPlaylists by user Logged
  let playlistsUser = window.localStorage.getItem("playlists");
  if(playlistsUser){
      DataPlaylists = JSON.parse(playlistsUser)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
  

     const playlists = {
        id:Math.floor(Math.random() * 5000),
        UserId:UserId,
        NamePlaylist:Title,
        image:image

     }
   data.push(DataPlaylists,playlists)
      window.localStorage.setItem("playlists",JSON.stringify(data.flat(1000)))
     window.location.reload()
     
   
    

    
    
 };
  return (
   <div>
    <div className='test fvrt'>
    <SideBar/>
    <div className='pa'>
      <Header ArrUsers={[]} />
    <div className='parent'>
    <h3>music playlists</h3>
         <div className='playlistUsers'>
          
            {DataPlaylists.filter(it => it.UserId == UserId).map((item:any) => (
                <Link to={`/DetailPlaylist/${item.id}`}>
                  <div className='userp'>
                  <div className='about'>
                  <img src={img} />
                  <h3>{item.NamePlaylist}</h3>
                  </div>
                  </div>
                 </Link>
            ))}
         </div>
   
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  create Playlist
</button>

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-className fs-5" id="exampleModalLabel">Add Playlist</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} className='from-control mb-2' />
            <input type="file" onChange={handlimg} />
            <div className="modal-footer">
         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="submit" className="btn btn-primary">Save</button>
         </div>
         </form>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  </div>
  </div>
  )
}


function checkIsLogged(){
  const LoggedUser = window.localStorage.getItem("LoggedUser");
  if(LoggedUser!=null){
     return <Playlists ArrUsers={[]} data={[]} DataPlaylists={[]} FilterPlaylists={[]}/>
  }else{
     return <LoginSign/>;
  }

}

export default checkIsLogged