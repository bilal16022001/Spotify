import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Componenets/Test';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Componenets/Home';
import Search from './Componenets/Search';
import Favourites from './Componenets/Favourites';
import Playlists from './Componenets/Playlists';
import Heading from './Componenets/Heading';
import Test2 from './Componenets/Test2';
import Btn from './Componenets/Btn';
import Style from './Componenets/Style';
import { ThemeConProviders } from './Componenets/context/ThemeCon';
import Box from './Componenets/context/Box';
import { UserContextProvider } from './Componenets/context/UserContext';
import User from './Componenets/context/User';
import { Counter } from './Componenets/Class/Counter';
import List from './Componenets/generics/List';
import Input from './Componenets/Input';
import Login from './Componenets/LoginSign';
import LoginSign from './Componenets/LoginSign';
import DetailPlaylist from './Componenets/DetailPlaylist';
import Header from './Componenets/Header';


function App() {
   const nameList = 
      {
         name:"asd",
         last:"Kalksd"
      }
      const playlists = [
        {
          name:"asd",
          last:"Kalksd"
        }
      ]
  return (
    <Router>
    <div className="App">
      {/* <ThemeConProviders>
         <Box/>
      </ThemeConProviders>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Counter  /> */}
      {/* <List 
           itmes={["sad","suic","ioas","asnjk"]} 
           Onclick={(item) => console.log(item)}
        >from list</List>
        <Input  itmes={["sad","suic","ioas","asnjk"]}
                Onclick={(item) => console.log(item)}   
                span="text"
          
         >from input </Input> */}
      <Routes>
        <Route path="/" element={<LoginSign/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/:playlists" element={<Playlists />} />
        <Route path="/DetailPlaylist/:id" element={<DetailPlaylist DataPlaylists={[]} />} />
        <Route path="/Favourites" element={<Favourites/>} />
     </Routes>
    </div>
    {/* <Test  Names={nameList}/> */}
    {/* <Test  /> */}
    {/* <Heading>cvcv</Heading>
    <Test2>
      sax
       <Heading>from test2</Heading>
    </Test2> */}
  <>
    {/* <Btn 
     handlClick={(event,name) => {
      console.log("clied",name)
     }}
    /> */}
    {/* <Btn value='' handlInput={(event) => console.log(event)} */}

    {/* <Style styles={{color:"red",background:"blue",padding:"10px"}} /> */}
  </>
    </Router>
  );
}

export default App;
