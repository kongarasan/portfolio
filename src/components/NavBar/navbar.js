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
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>HOME</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>ABOUT</Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>PORTFOLIO</Link>
      <Link activeClass='active' to='Lang' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>SKILLS</Link>

        </div>
        <button className='desktopMenuBtn' onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});}
        }>
            <img src={ContactImg} alt='Contact' className='desktopMenuImage'></img>Contact Me
        </button>
    </nav>

  )
}

export default Navbar