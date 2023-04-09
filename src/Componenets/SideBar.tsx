import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar">
    <div className="all">
  <div className="sidebar-item">
    <Link to="/Home">Home</Link>
  </div>
  <div className="sidebar-item">
    <i className="fas fa-user"></i>
    <Link to="/Search">Search</Link>
  </div>
  <div className="sidebar-item">
    <i className="fas fa-cog"></i>
    <Link to="/Favourites">Favourite</Link>
  </div>
  <div className="sidebar-item">
    <i className="fas fa-cog"></i>
    <Link to="/playlists"> Playlist</Link>
  </div>
  </div>
    </div>
  )
}

export default SideBar