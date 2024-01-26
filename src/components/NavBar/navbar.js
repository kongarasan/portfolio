import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import ContactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
      <Link className='desktopMenuListItems'>Home</Link>
      <Link className='desktopMenuListItems'>About</Link>
      <Link className='desktopMenuListItems'>Portfolio</Link>
      <Link className='desktopMenuListItems'>Clients</Link>

        </div>
        <button className='desktopMenuBtn'>
            <img src={ContactImg} alt='Contact' className='desktopMenuImage'></img>contact Me
        </button>
    </nav>

  )
}

export default Navbar