import React from 'react'
import '../css/herosec.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../media/bg4.jpg'
import img2 from '../media/bg2.jpg'
import img3 from '../media/bg5.jpg'
export default function Herosec() {
    // var myCarousel = document.querySelector('#myCarousel')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //     interval: 2000,
    //     wrap: false
    // })
    return (
        <div>
            <div class="heromain">

                <div id="carouselExampleCaptions" class="carousel slide"  data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block">
                                <div class="sdcapmain">
                                    <div class="sdcap">
                                        <h5>Starting at $ 29.00</h5>
                                        <p>Explore fresh & <br /> Juicy fruits</p>
                                        <button className='shop'>Shop Now &nbsp; <i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block">
                                <div class="sdcapmain">
                                    <div class="sdcap">
                                        <h5>Starting at $ 29.00</h5>
                                        <p>Organic & Healthy <br /> Vegetables</p>
                                        <button className='shop'>Shop Now &nbsp; <i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-md-block">
                                <div class="sdcapmain3">
                                    <div class="sdcap sdcap2">
                                        <h5>Starting at $ 29.00</h5>
                                        <p>Explore fresh & <br /> Juicy fruits</p>
                                        <button className='shop'>Shop Now &nbsp; <i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

                
                </div>
                {/* -----------------------------mini card start here--------------------------- */}
               
                <div class="sec2main" data-aos="zoom-in">
                <div class="scrollmain">
                    <div class="bakerymain">
                        <div class="bakery">
                        <i class="fa-light fa-coffee-pot"></i>
                        <h6>Dairy & Milk</h6>
                        <span>48 Items</span>
                        </div>
                    </div>
                    <div class="bakerymain2">
                        <div class="bakery">
                        <i class="fa-thin fa-peach"></i>
                        <h6>Fruits</h6>
                        <span>320 Items</span>
                        </div>
                    </div>
                    <div class=" bakerymain3">
                        <div class="bakery">
                        <i class="fa-thin fa-baguette"></i>
                        <h6>Bakery</h6>
                        <span>65 Items</span>
                        </div>
                    </div>
                    <div class=" bakerymain4">
                        <div class="bakery">
                        <i class="fa-light fa-eggplant"></i>
                        <h6>Vegetables</h6>
                        <span>548 Items</span>
                        </div>
                    </div>
                    <div class="bakerymain5">
                        <div class="bakery">
                        <i class="fa-light fa-burger-soda"></i>
                        <h6>Juice & Drinks</h6>
                        <span>48 Items</span>
                        </div>
                    </div>
                    <div class="bakerymain6">
                        <div class="bakery">
                        <i class="fa-light fa-french-fries"></i>
                        <h6>Snack & Spice</h6>
                        <span>845 Items</span>
                        </div>
                    </div>
                    <div class="bakerymain7">
                        <div class="bakery">
                        <i class="fa-light fa-shrimp"></i>
                        <h6>Seafood</h6>
                        <span>652 Items</span>
                        </div>
                    </div>
                    <div class="bakerymain8">
                        <div class="bakery">
                        <i class="fa-light fa-popcorn"></i>
                        <h6>Fast Food</h6>
                        <span>320 Items</span>
                        </div>
                    </div>
                    <div class="bakerymain9">
                        <div class="bakery">
                        <i class="fa-light fa-coffee-pot"></i>
                        <h6>Dairy & Milk</h6>
                        <span>48 Items</span>
                        </div>
                    </div> 
                   
                    </div>
                </div>
                {/* </div> */}
            </div>

        </div>
    )
}



