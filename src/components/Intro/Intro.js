import React from 'react';
import './intro.css';
import bg from "../../assets/Mine.png"
import {Link} from 'react-scroll';
import { Button } from 'react-scroll';
import btnImg from "../../assets/hireme.png"
import computer from "../../assets/computer.jpg"

const Intro = () => {
  return (
   <section id='intro'>
   
    <div className='introContent'>
    
  <span className='hello'>Hello,</span>
  <span className='introText'>I'm <span className='introName'>Kongarasan</span><br/>Web & Mobile Developer</span>
  <p className='introPara'>I am a skilled and Passionate web developer with experience in creating<br/> visually appealing and user-friendly websites </p>
  <Link><Button className='btn'><img src={btnImg} alt='' className='btnImg'></img>Hire Me</Button></Link>
    </div>
    <img src={bg} alt='Profile' className='bg'/>

   </section>
  )
}

export default Intro;