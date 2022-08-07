import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <div className = 'navbar'>
      <Link to='/'>
    <h1>Crypto <span className='purple'>Tracker</span></h1>
    </Link>
    </div>
  )
}

export default NavBar