import React from 'react'
import './skill.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skill = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>As a dedicated web and app developer, I specialize in creating dynamic and user-friendly digital experiences. With a passion for innovation and a keen eye for design, I craft seamless solutions that elevate user engagement and drive results. Proficient in frontend and backend development, I thrive on tackling complex challenges and delivering robust, scalable solutions. Let's collaborate to bring your ideas to life in the digital realm!</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIdesign' className='SkillBarImg'></img>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>Crafting intuitive and visually appealing digital experiences through UX/UI design.</p>

          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='SkillBarImg'></img>
          <div className='skillBarText'>
            <h2>Website Development </h2>
            <p>Web development is the art and science of building and maintaining websites and web applications</p>

          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesidn' className='SkillBarImg'></img>
          <div className='skillBarText'>
            <h2>App Development</h2>
            <p>Crafting intuitive and impactful mobile experiences through innovative app development</p>

          </div>
        </div>



      </div>
    </section>
  )
}

export default Skill