import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [open , setOpen ] = useState(false)

    function hadleMenu() {
        if(open){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

  return (
    <>
    <nav className='navbar container '>
        <ul className={`nav-list flex ${open ? 'open' : ''}`}>
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to={"about"}>
            <li>About</li>
            </Link>
            <Link to={"project"}>
            <li>Projects</li>
            </Link>
            <Link to={"contact"}>
            <li>Contact me</li>
            </Link>
           
        </ul>
        <div className='menu-btn' id='menu-btn' onClick={hadleMenu}>
        <img src="menu.svg"  alt="menu-btn-svg" />
        </div>
    </nav>
    </>
  )
}

export default Header