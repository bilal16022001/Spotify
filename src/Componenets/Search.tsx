import React, { useState } from 'react'
import LoginSign from './LoginSign';
import SideBar from './SideBar'
import {MoreMusics} from './data'
import Header from './Header';

type ItemsPrps = {
   search:string
}

function Search() {
  const [Search,setSearch]=useState("");

  const HandlSearch = (e:any) => {
    e.preventDefault();
     console.log(MoreMusics);
     
  }
  console.log(Search);
     
  return (
    <div className='test fvrt'>
      <SideBar/>
      <div className='pa'>
        <Header  ArrUsers={[]} />
      <div className='parent'>
        <div className='search container p-4'> 
            <form className='' onSubmit={HandlSearch}>
              <input type="search" className='mb-3 form-control' onChange={(e) => setSearch(e.target.value)} placeholder='Search On Music' />
              <input className='btn btn-primary' type="submit" value="Search" />
              </form>
        </div>
        <hr className='container'/>
        <div className='playlistUsers'>
      {MoreMusics.filter(it => it.title.indexOf(Search) > -1).map((item:any) => (
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
     return <Search/>
  }else{
     return <LoginSign/>;
  }

}

export default checkIsLogged