import React , { useRef} from 'react'
import "./contact.css"
import C from "../../assets/C.png"
import CP from "../../assets/C++.png"
import Python from "../../assets/Python.png"
import Sql from "../../assets/SQL.png"
import react from "../../assets/React.png"
import Git from "../../assets/Git.png"
import css from "../../assets/css.png"
import java from "../../assets/java.png"
import html from "../../assets/html.png"
import javascript from "../../assets/javascript.png"

import facebookicon from "../../assets/facebook-icon.png"
import twittericon from "../../assets/twitter.png"
import Youtube from "../../assets/youtube.png"
import Insta from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_awzcz6o', 'template_m792id8', form.current, 'oe2jBKGN0y9DmGEC3')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
<div id='Lang'>
<h1 className='contactPageTitle'>My Skills</h1>
<p className='skillsDesc'>Proficient in a wide array of technical skills including HTML, CSS, JavaScript, and backend development frameworks, coupled with a keen eye for design principles and UX/UI best practices</p>
<div className='skillsImgs'>
<img src={C} alt='Skill' className='skillsImg'></img>
<img src={CP} alt='Skill' className='skillsImg'></img>
<img src={Python} alt='Skill' className='skillsImg'></img>
<img src={Sql} alt='Skill' className='skillsImg'></img>
<img src={react} alt='Skill' className='skillsImg'></img>
<img src={Git} alt='Skill' className='skillsImg'></img>
<img src={css} alt='Skill' className='skillsImg'></img>
<img src={html} alt='Skill' className='skillsImg'></img>
<img src={java} alt='Skill' className='skillsImg'></img>
<img src={javascript} alt='Skill' className='skillsImg'></img>

</div>
</div>
<div id='contact'>
<h1 className='contactPageTitle'>Contact Me</h1>
<span className='contactDesc'>Please fill out the form below to discuss any work Opportunities</span>
<form className='contactForm' ref={form} onSubmit={sendEmail}>
<input type='text' className='name' placeholder='Name' name='from_name'></input>
<input type='email' className='email' placeholder='E-Mail' name='from_email'></input>
<textarea name='message' rows="5" className="msg" placeholder='Your Message'></textarea>
<button type='submit'value="send" className='submitBtn'>Submit</button>
<div className='links'>
<img src={facebookicon} alt='facebook' className='link'></img>
<img src={Insta} alt='instagram' className='link'></img>
<img src={Youtube} alt='youtube' className='link'></img>
<img src={twittericon} alt='twitter' className='link'></img>
</div>
</form>
</div>

    </section>
  )
}

export default Contact