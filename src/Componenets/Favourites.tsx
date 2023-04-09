import React, { useEffect, useState } from 'react'
import LoginSign from './LoginSign';
import SideBar from './SideBar'
import {MoreMusics} from '../Componenets/data'
import Header from './Header';


type ItemsPrps = {
  FvrtMusics:any[]
  FilterFvMusics:any[]
  ArrUsers:any[]
  
}

function Favourites({FvrtMusics,FilterFvMusics,ArrUsers}:ItemsPrps) {
    const [userId,setUserId]=useState<number | null>(null)
    useEffect(() => {
      getUser_id()
    },[])


    //get logged id
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

  //get favourite musics
  let OldFavouriteMusics = window.localStorage.getItem("FavouriteMusics");
  if(OldFavouriteMusics){
    FvrtMusics = JSON.parse(OldFavouriteMusics)
  }


  //filter fvMusic
  for(let i=0;i<MoreMusics.length;i++){
      for(let j=0;j<FvrtMusics.length;j++){
          if(MoreMusics[i].id == FvrtMusics[j].Music_id && FvrtMusics[j].user_id == userId){
               FilterFvMusics.push(MoreMusics[i])        
          }
      }
  }


   FilterFvMusics = Array.from(new Set(FilterFvMusics))
  

  return (
    <div className='test fvrt'>
    <SideBar/>
    <div className='pa'>
      <Header ArrUsers={[]} />
    <div className='parent'>
    <h2>Favourite music</h2>
    <div className='playlistUsers'>
    {FilterFvMusics.map((item:any) => (
             <div className='userp'>
             <div className='about'>
             <img className='imgMusic' src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/be/51/83/be5183cc-87dd-3ca3-c082-3ccf228e8bf0/pr_source.png/800x800cc.jpg"/>
  
             <h3>{item.title}</h3>
  
               
              
            </div>
               </div>
    ))}
     </div>
    </div>
    </div>
  </div>
  )
}


function checkIsLogged(){
  const LoggedUser = window.localStorage.getItem("LoggedUser");
  if(LoggedUser!=null){
     return <Favourites  FvrtMusics={[]} FilterFvMusics={[]} ArrUsers={[]}  />
  }else{
     return <LoginSign/>;
  }

}

export default checkIsLogged