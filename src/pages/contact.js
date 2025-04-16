import React from 'react'
import '../css/contact.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
export default function Contact() {
  return (
    <div>
      <Headcont />
      <div class="contactmain">
        <div class="contactstag">
          <div class="deal newdeal">Get in  <span>Touch</span></div>
          <div class="contstag2">Please select a topic below related to you inquiry. If you don t fint what you need, fill out our contact form.</div>
        </div>
        <div class="conbox3">
          <div class="conboxone">
            <div class="contboxicon"><i class="fa-solid fa-envelope"></i></div>
            <h4>Mail & Website</h4>
            <span><i class="fa-solid fa-envelope"> </i> mail.example@gmail.com</span>
            <span><i class="fa-solid fa-earth-americas"></i>  www.yourdomain.com</span>
          </div>
          <div class="conboxone">
            <div class="contboxicon"><i class="fa-solid fa-mobile-screen-button"></i></div>
            <h4>Contact</h4>
            <span><i class="fa-solid fa-mobile-screen-button"></i> (+91)-9876XXXXX</span>
            <span><i class="fa-solid fa-mobile-screen-button"></i> (+91)-987654XXXX</span>
          </div>
          <div class="conboxone">
            <div class="contboxicon"><i class="fa-solid fa-location-dot"></i></div>
            <h4>Address</h4>
            <span><i class="fa-solid fa-location-dot"></i> Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</span>
           
          </div>
        </div>
        <div class="contactsec3">
          <div class="maps"><iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d19806514.410819363!2d104.43354636150929!3d31.018789360954308!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743066251347!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          <div class="formdata">
            <input type="text" className='fnames' placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="text" className='fnames' placeholder='Phone' />
            <textarea name="" className='fmessage' placeholder='Message' id=""></textarea>
              <button type='submit' className='fbtns'>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
