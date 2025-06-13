import React from 'react'
import '../css/contact.css'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import Headcont from '../component/headcont'
import Footer from '../component/footer'
export default function Contact() {
    const form = useRef();
    const sendEmail = (e) =>{
      e.preventDefault();

      emailjs.sendForm("service_ydqq6bn", "template_tya3tck", form.current, "KHTPd2S1FnLiYzKuz").then(
        ()=>{
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("failed to send message,please try again.",error.text);
        }
      )

    }
  return (
    <div>
      <Headcont />
      <div className="contactmain">
        <div className="contactstag">
          <div className="deal newdeal">Get in  <span>Touch</span></div>
          <div className="contstag2">Please select a topic below related to you inquiry. If you don t fint what you need, fill out our contact form.</div>
        </div>
        <div className="conbox3">
          <div className="conboxone">
            <div className="contboxicon"><i className="fa-solid fa-envelope"></i></div>
            <h4>Mail & Website</h4>
            <span><i className="fa-solid fa-envelope"> </i> mail.example@gmail.com</span>
            <span><i className="fa-solid fa-earth-americas"></i>  www.yourdomain.com</span>
          </div>
          <div className="conboxone">
            <div className="contboxicon"><i className="fa-solid fa-mobile-screen-button"></i></div>
            <h4>Contact</h4>
            <span><i className="fa-solid fa-mobile-screen-button"></i> (+91)-9876XXXXX</span>
            <span><i className="fa-solid fa-mobile-screen-button"></i> (+91)-987654XXXX</span>
          </div>
          <div className="conboxone">
            <div className="contboxicon"><i className="fa-solid fa-location-dot"></i></div>
            <h4>Address</h4>
            <span><i className="fa-solid fa-location-dot"></i> Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</span>
           
          </div>
        </div>
        <div className="contactsec3">
          <div className="maps"><iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d19806514.410819363!2d104.43354636150929!3d31.018789360954308!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743066251347!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
         
            <form ref={form} onSubmit={sendEmail} className="formdata" >
            <input type="text" className='fnames' name='name' placeholder='Full Name' />
            <input type="email" placeholder='Email' name='email' />
            <input type="text" className='fnames' placeholder='Phone' name='number' />
            <textarea name="message" className='fmessage' placeholder='Message' id=""  ></textarea>
              <button type='submit' className='fbtns'>Submit</button>
              </form>
         
        </div>
      </div>
      <Footer />
    </div>
  )
}
