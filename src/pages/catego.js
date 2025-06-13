import Headcont from '../component/headcont'
import Footer from '../component/footer'
import '../css/categories.css'
import React, { useEffect, useState } from 'react'
import { items2 } from '../data/data1';

// import fruitimg3 from '../media/fruitsimg3.jpg'
export default function Catego() {
    const [data2, setData2] = useState (items2);
    const [felt, setFelt] = useState ("")
    
    const getData = (e) =>{
       console.log(e.target.value);
       setFelt(e.target.value);
    }
    let filterOut = data2.filter((curvalue) =>{
        return curvalue.name.toLowerCase(). includes(felt)
    })

  return (
    <div>
    <Headcont />
    <div className="categoriescont">
    <div className="twobanner">
                <div className="catfruits">
                    <div className="snackbninfo">
                        <h3>Tasty Snack & Fastfood</h3>
                        <p>The Flavor Of Something Special</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="snackbn2">
                    <div className="snackbninfo">
                        <h3>Fresh Fruits & veggies</h3>
                        <p>A healthy meal for every one</p>
                        <button>Shop Now</button>
                    </div>
                </div>

            </div>
            <div class="filters">
            <div class="arrivals">
            <div className="deal">Latest <span>Product</span></div>
           <div className="proddata">Shop online for new arrivals and get free shipping!</div>
           </div>
           <div class="searchsec">
            <input type="text" placeholder='Search Product' className='filt' onChange={getData} />
           </div>
           </div>
           <div className="prodcards">
            {
                filterOut.map((item2, index) => { 
                    return(
                        <>
                <div className="prod1" >
                    <div className="saletag">SALE</div>
                    <div className="prodimg" data-aos="fade-up">
                        <img src={item2.src} alt="" />
                        <div className="fouricon">
                            <div className="itemicon1"><i className="fa-regular fa-heart"></i></div>
                            <div className="itemicon1"><i className="fa-regular fa-eye"></i></div>
                            <div className="itemicon1"><i className="fa-solid fa-repeat"></i></div>
                            <div className="itemicon1"><i className="fa-solid fa-basket-shopping"></i></div>
                        </div>
                    </div>
                    <div className="prodinfo">
                        <div className="itemtag1">{item2.name}</div>
                        <div className="itemtag2">{item2.info}</div>
                        <div className="prodicon"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <span><i className="fa-solid fa-star"></i></span> </div>
                        <div className="prodprice"> $ {item2.price1}.00 <del>$ {item2.price2}.00</del> </div>
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
