import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import SideBar from './SideBar'
import {MoreMusics} from './data'
import Header from './Header'

type ParmPrp = {
  DataPlaylists:any[]
}

function DetailPlaylist({DataPlaylists}:ParmPrp) {
    const {id} = useParams();
    let MusicPlay:any=[];
   const [musId,setMsid]=useState(null)

    let OldMusicsPlayList = window.localStorage.getItem("MusicsPlaylist");
    if(OldMusicsPlayList){
      MusicPlay = JSON.parse(OldMusicsPlayList)
    }
    let playlistsUser = window.localStorage.getItem("playlists");
    if(playlistsUser){
        DataPlaylists = JSON.parse(playlistsUser)
    }

for(let i=0;i<MusicPlay.length;i++){
    for(let j=i+1;j<MusicPlay.length;j++){
        if(MusicPlay[i].Music_id==MusicPlay[j].Music_id && MusicPlay[i].UserId == MusicPlay[j].UserId && MusicPlay[i].playlist_id == MusicPlay[j].playlist_id){
             MusicPlay.splice(j--,1);
             
        }
     }
}



  return (
    <div className='test fvrt'>
    <SideBar/>
    <div className='pa'>
      <Header ArrUsers={[]} />
    <div className='parent'>
      <div className='playlistUsers'>
    {MusicPlay.filter((it:any) => it.playlist_id == id).map((item:any) => (
             <div className='userp'>
             <div className='about'>
             <img className='imgMusic' src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/be/51/83/be5183cc-87dd-3ca3-c082-3ccf228e8bf0/pr_source.png/800x800cc.jpg"/>
  
             <h3>{MoreMusics[item.Music_id-1].title}</h3>
  
               
              
            </div>
               </div>
    ))}
     </div>
    </div>
   </div>
    </div>
  )
}

export default DetailPlaylist