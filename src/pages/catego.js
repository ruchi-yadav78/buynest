import Headcont from '../component/headcont'
import Footer from '../component/footer'
import '../css/categories.css'
import React, { useEffect, useState } from 'react'
import { items2 } from '../data/data1';

// import fruitimg3 from '../media/fruitsimg3.jpg'
export default function Catego() {
    const [data2, setData2] = useState ([]);
      useEffect(() => {
            setData2(items2);
        }, []);
  return (
    <div>
    <Headcont />
    <div class="categoriescont">
    <div class="twobanner">
                <div class="catfruits">
                    <div class="snackbninfo">
                        <h3>Tasty Snack & Fastfood</h3>
                        <p>The Flavor Of Something Special</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div class="snackbn2">
                    <div class="snackbninfo">
                        <h3>Fresh Fruits & veggies</h3>
                        <p>A healthy meal for every one</p>
                        <button>Shop Now</button>
                    </div>
                </div>

            </div>

            <div class="deal">Latest <span>Product</span></div>
           <div class="proddata">Shop online for new arrivals and get free shipping!</div>
           <div class="prodcards">
            {
                data2.map((item2, index) => {
                    return(
                        <>
                <div class="prod1" >
                    <div class="saletag">SALE</div>
                    <div class="prodimg" data-aos="fade-up">
                        <img src={item2.src} alt="" />
                        <div class="fouricon">
                            <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                            <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                            <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                            <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                        </div>
                    </div>
                    <div class="prodinfo">
                        <div class="itemtag1">{item2.name}</div>
                        <div class="itemtag2">{item2.info}</div>
                        <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                        <div class="prodprice"> $ {item2.price1}.00 <del>$ {item2.price2}.00</del> </div>
                    </div>
                </div>
            
              
                 </>
                    )
                })
            }
            </div>
    </div>
    <Footer />
    </div>
  )
}
