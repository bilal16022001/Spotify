import React, { useEffect, useState,useRef } from 'react'
import SideBar from './SideBar'
import axios from 'axios'
import img from '../Componenets/images/avatar-anisha.png'
import Playlists from './Playlists'
import { useParams } from 'react-router'
import LoginSign from './LoginSign'
import { Link } from 'react-router-dom'
import {MoreMusics} from './data';
import Header from './Header'

type KeyPr = {
   key?:number
}

type itemsPrp  = {
  ArrUsers:any[]
  FavouriteMusics:any[]
  dataMusic:any[]
  DataPlaylists:any[]
  MusicPlay:any[]
  FvrtMusics:any[]
  FilterFvMusics:any[]
 }

function Home({ArrUsers,DataPlaylists,MusicPlay,dataMusic,FavouriteMusics,FvrtMusics,FilterFvMusics}:itemsPrp) {

  const [Musics,setMusics]=useState([])

  //api not work he give error 429
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: {key: '484129036', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '3583c97cf1msh615b21e23b27be0p19feb9jsn825c4900ddf6',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    }
  };
 const [UserId,setUserId]=useState(null);
 const [Id,setId]=useState<number | null>(null)
 const [Name,setName]=useState("");

const getMusicId = (id:number) => {
   setId(id)
   
}

  useEffect(() =>{

    axios.request(options).then(function (response) {
      console.log(response.data.tracks);
      setMusics(response.data.tracks)
    }).catch(function (error) {
      console.error(error);
    });
    getUser_id();
  },[])


  let playlistsUser = window.localStorage.getItem("playlists");
  if(playlistsUser){
     DataPlaylists = JSON.parse(playlistsUser)
   }
  const getUser_id = () => {
    const getUsers = window.localStorage.getItem("users");
    const LoggedUser = window.localStorage.getItem("LoggedUser");
      
    if(getUsers){
      ArrUsers = JSON.parse(getUsers);
    }
  
    for(let i=0;i<ArrUsers.length;i++){
        if(ArrUsers[i].email==LoggedUser){
            setUserId(ArrUsers[i].id);
            setName(ArrUsers[i].username)
        }   
       
    }
    }


let OldMusicsPlayList = window.localStorage.getItem("MusicsPlaylist");
if(OldMusicsPlayList){
  MusicPlay = JSON.parse(OldMusicsPlayList)
}
const AddMusicPlayList = (e:any) => {
 
   const playlistsMusic = {
      id:Math.floor(Math.random() * 5000),
      Music_id:Id,
      UserId:UserId,
      playlist_id:e.target.value
  }
  
  dataMusic.push(MusicPlay,playlistsMusic)

  window.localStorage.setItem("MusicsPlaylist",JSON.stringify(dataMusic.flat()))

}
let ArrFav:any=[];

let OldFavoriteMusics = window.localStorage.getItem("FavouriteMusics");
if(OldFavoriteMusics){
  FavouriteMusics = JSON.parse(OldFavoriteMusics)
}
const AddInFavourite = (musicId:number) => {

   const FavouriteMusic = {
       id:Math.floor(Math.random() * 500),
       Music_id:musicId,
       user_id:UserId
   }
   ArrFav.push(FavouriteMusics,FavouriteMusic);
   window.localStorage.setItem("FavouriteMusics",JSON.stringify(ArrFav.flat()))



   
}


 //get favourite musics
 let OldFavouriteMusics = window.localStorage.getItem("FavouriteMusics");
 if(OldFavouriteMusics){
   FvrtMusics = JSON.parse(OldFavouriteMusics)
 }

  //filter fvMusic
  for(let i=0;i<MoreMusics.length;i++){
    for(let j=0;j<FvrtMusics.length;j++){
        if(MoreMusics[i].id == FvrtMusics[j].Music_id && FvrtMusics[j].user_id == UserId){
             FilterFvMusics.push(MoreMusics[i])   
            console.log(MoreMusics[i]);
                 
        }
    }
}


 FilterFvMusics = Array.from(new Set(FilterFvMusics))
  return (
    <div className='test'>
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
         <hr/>
         <div className=''>
           <h3>user favourites music</h3>
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
         <hr/>
         <h3 className=''>More Music</h3>
         <div className='playlistUsers'>
          {MoreMusics.map((item:any,index) => (
             <div className='userp'>
             <div className='about'>
             <img className='imgMusic' src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/be/51/83/be5183cc-87dd-3ca3-c082-3ccf228e8bf0/pr_source.png/800x800cc.jpg"/>
               <h3>{item.title}</h3>


               <select className='mb-2' onClick={(e) => getMusicId(item.id)}  onChange={AddMusicPlayList}>
                 <option>Choose Playlist</option>
                 {DataPlaylists.filter(it => it.UserId ==UserId).map(item => (
                     <option value={item.id}>{item.NamePlaylist}</option>
                ))}
               </select><br/>
              
               <a className='btn btn-primary' onClick={(e) => AddInFavourite(item.id)} style={{}}> Add Favourite</a>
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
       return <Home ArrUsers={[]} DataPlaylists={[]} MusicPlay={[]} dataMusic={[]} FavouriteMusics={[]} FvrtMusics={[]} FilterFvMusics={[]} />
    }else{
       return <LoginSign/>;
    }

}

export default checkIsLogged

