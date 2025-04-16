import React from 'react'
import '../css/homesec4.css'
import blog1 from '../media/blog1.jpg'
import blog2 from '../media/blog2.jpg'
import blog3 from '../media/blog3.jpg'
import blog4 from '../media/blog4.jpg'
import blog5 from '../media/blog5.jpg'
export default function Homesec4() {
    return (
        <div className='homesec4main'>
            <div class="twobanner">
                <div class="snackbn" data-aos="fade-right">
                    <div class="snackbninfo">
                        <h3>Tasty Snack & Fastfood</h3>
                        <p>The Flavor Of Something Special</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div class="snackbn2" data-aos="fade-left">
                    <div class="snackbninfo">
                        <h3>Fresh Fruits & veggies</h3>
                        <p>A healthy meal for every one</p>
                        <button>Shop Now</button>
                    </div>
                </div>

            </div>
            <div class="fourcopan">
                <div class="copan1" data-aos="fade-right">
                    <i class="fa-solid fa-truck"></i>
                    <h4>Free Shipping</h4>
                    <h6>Free shipping on all US order or order above $200</h6>
                </div>
                <div class="copan1" data-aos="fade-down">
                    <i class="fa-light fa-hand-holding-seedling"></i>
                    <h4>24X7 Support</h4>
                    <h6>Contact us 24 hours a day, 7 days a week</h6>
                </div>
                <div class="copan1" data-aos="fade-up">
                    <i class="fa-light fa-badge-percent"></i>
                    <h4>30 Days Return</h4>
                    <h6>Simply return it within 30 days for an exchange</h6>
                </div>
                <div class="copan1" data-aos="fade-left">
                    <i class="fa-light fa-circle-dollar-to-slot"></i>
                    <h4>Payment Secure</h4>
                    <h6>Contact us 24 hours a day, 7 days a week</h6>
                </div>
            </div>
            <div class="blogsec">
                <div class="deal">Latest  <span>Blog</span></div>
                <div class="proddata">We tackle interesting topics every day in 2023.</div>

                <div class="fourblog" data-aos="flip-up">
                    <div class="blog1">
                        <div class="blog1img"><img src={blog1} alt="" /></div>
                        <span>June 30,2022 - Organic</span>
                        <h5>Marketing Guide: 5 Steps to Success to way.</h5>
                        <h6>Read More <i class="fa-solid fa-angles-right"></i></h6>
                    </div>
                    <div class="blog1">
                    <div class="blog1img"><img src={blog2} alt="" /></div>
                        <span>April 02,2022 - Fruits</span>
                        <h5>Best way to solve business deal issue in market.</h5>
                        <h6>Read More <i class="fa-solid fa-angles-right"></i></h6>
                    </div>
                    <div class="blog1">
                    <div class="blog1img"><img src={blog3} alt="" /></div>
                        <span>Mar 09,2022 - Vegetables</span>
                        <h5>31 grocery customer service stats know in 2019.</h5>
                        <h6>Read More <i class="fa-solid fa-angles-right"></i></h6>
                    </div>
                    <div class="blog1">
                    <div class="blog1img"><img src={blog4} alt="" /></div>
                        <span>January 25,2022 - Fastfood</span>
                        <h5>Business ideas to grow your business traffic.</h5>
                        <h6>Read More <i class="fa-solid fa-angles-right"></i></h6>
                    </div>
                    <div class="blog1">
                    <div class="blog1img"><img src={blog5} alt="" /></div>
                        <span>December 10,2021 - Fruits</span>
                        <h5>Marketing Guide: 5 Steps way to Success.</h5>
                        <h6>Read More <i class="fa-solid fa-angles-right"></i></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
