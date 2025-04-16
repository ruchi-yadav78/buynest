import React from 'react'
import '../css/footer.css'
import footimg1 from '../media/footimg.png'
import footimg2 from '../media/footimg2.png'
import pay1 from '../media/pay1.png'
export default function Footer() {
    return (
        <div className='footermain'>
            <footer>
                <div class="footpart1">
                    <div class="footsec1">
                        <div class="footerbrand">
                            <div class="brand"><i class="fa-solid fa-basket-shopping"></i> Buy<span>Nest</span></div>
                        </div>
                        <div class="brandinfo">Buynest is the biggest market of grocery products. Get your daily needs from our store.</div>
                        <div class="footimg">
                            <img src={footimg1} alt="" />
                            <img src={footimg2} alt="" />
                        </div>
                    </div>
                    <div class="footsec2">
                        <h2>Category</h2>
                        <p className='categtags'>Dried Fruit</p>
                        <p className='categtags'>Cookies</p>
                        <p className='categtags'>Foods</p>
                        <p className='categtags'>Fresh Fruit</p>
                        <p className='categtags'>Tuber root</p>
                    </div>
                    <div class="footsec2">
                        <h2>Company</h2>
                        <p className='categtags'>About us</p>
                        <p className='categtags'>Delivery</p>
                        <p className='categtags'>Legal Notice</p>
                        <p className='categtags'>Terms & conditions</p>
                        <p className='categtags'>Secure payment</p>
                    </div>
                    <div class="footsec2">
                        <h2>Account</h2>
                        <p className='categtags'>Sign In</p>
                        <p className='categtags'>View Cart</p>
                        <p className='categtags'>Return Policy</p>
                        <p className='categtags'>Become a Vendor</p>
                        <p className='categtags'>Payments</p>
                    </div>
                    <div class="footsec3">
                        <h2>Contact</h2>
                        <p><i class="fa-solid fa-location-dot"></i> 2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                        <p><i class="fa-brands fa-whatsapp"></i> +00 9876543210</p>
                        <p><i class="fa-solid fa-envelope"></i> example@email.com</p>
                         <div class="footicon">
                            <div class="footicon1"><i class="fa-brands fa-facebook-f"></i></div>
                            <div class="footicon1"><i class="fa-brands fa-twitter"></i></div>
                            <div class="footicon1"><i class="fa-brands fa-linkedin-in"></i></div>
                            <div class="footicon1"><i class="fa-brands fa-instagram"></i></div>
                         </div>
                    </div>
                </div>
                <div class="footpart2">
                    <div class="Copyrightmain">
                        <div class="Copyright">Copyright © all rights reserved. Powered by Grabit.</div>
                        <div class="payment">
                            <img src={pay1} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
