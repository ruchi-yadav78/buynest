import React from 'react'
import '../css/footer.css'
import footimg1 from '../media/footimg.png'
import footimg2 from '../media/footimg2.png'
import pay1 from '../media/pay1.png'
export default function Footer() {
    return (
        <div className='footermain'>
            <footer>
                <div className="footpart1">
                    <div className="footsec1">
                        <div className="footerbrand">
                            <div className="brand"><i className="fa-solid fa-basket-shopping"></i> Buy<span>Nest</span></div>
                        </div>
                        <div className="brandinfo">Buynest is the biggest market of grocery products. Get your daily needs from our store.</div>
                        <div className="footimg">
                            <img src={footimg1} alt="" />
                            <img src={footimg2} alt="" />
                        </div>
                    </div>
                    <div className="footsec2">
                        <h2>Category</h2>
                        <p className='categtags'>Dried Fruit</p>
                        <p className='categtags'>Cookies</p>
                        <p className='categtags'>Foods</p>
                        <p className='categtags'>Fresh Fruit</p>
                        <p className='categtags'>Tuber root</p>
                    </div>
                    <div className="footsec2">
                        <h2>Company</h2>
                        <p className='categtags'>About us</p>
                        <p className='categtags'>Delivery</p>
                        <p className='categtags'>Legal Notice</p>
                        <p className='categtags'>Terms & conditions</p>
                        <p className='categtags'>Secure payment</p>
                    </div>
                    <div className="footsec2">
                        <h2>Account</h2>
                        <p className='categtags'>Sign In</p>
                        <p className='categtags'>View Cart</p>
                        <p className='categtags'>Return Policy</p>
                        <p className='categtags'>Become a Vendor</p>
                        <p className='categtags'>Payments</p>
                    </div>
                    <div className="footsec3">
                        <h2>Contact</h2>
                        <p><i className="fa-solid fa-location-dot"></i> 2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                        <p><i className="fa-brands fa-whatsapp"></i> +00 9876543210</p>
                        <p><i className="fa-solid fa-envelope"></i> example@email.com</p>
                         <div className="footicon">
                            <div className="footicon1"><i className="fa-brands fa-facebook-f"></i></div>
                            <div className="footicon1"><i className="fa-brands fa-twitter"></i></div>
                            <div className="footicon1"><i className="fa-brands fa-linkedin-in"></i></div>
                            <div className="footicon1"><i className="fa-brands fa-instagram"></i></div>
                         </div>
                    </div>
                </div>
                <div className="footpart2">
                    <div className="Copyrightmain">
                        <div className="Copyright">Copyright © all rights reserved. Powered by Grabit.</div>
                        <div className="payment">
                            <img src={pay1} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
