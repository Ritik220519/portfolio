import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Portfolio</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      
       <li><Link to={"/"}>About</Link></li>
       <li><Link to={"/"}>Skills</Link></li>
       <li><Link to={"/contect"}>Contact</Link></li>
      <li>
       
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
