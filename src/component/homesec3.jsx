import React, { useEffect, useState } from 'react'
import '../css/homesec3.css'
import { items } from '../data/data1';
import item6 from '../media/product6.jpg'
import item7 from '../media/product7.jpg'
import item8 from '../media/product8.jpg'
import item9 from '../media/product9.jpg'
import item10 from '../media/product10.jpg'
import item11 from '../media/product11.jpg'
import item12 from '../media/product12.webp'
import item13 from '../media/product13.webp'
import item14 from '../media/product14.webp'
import item15 from '../media/product15.jpg'
import item16 from '../media/product16.jpg'
import item17 from '../media/product17.webp'
import item18 from '../media/product18.jpg'
import item19 from '../media/product19.jpg'
import item20 from '../media/product20.webp'
import { Link } from 'react-router-dom';
// import { items2 } from '../data/data1';
export default function Homesec3() {

    const [data, setData] = useState([]);
    // const [data2, setData2] = useState ([]);

    useEffect(() => {
        setData(items);
    }, []);
    // useEffect(() => {
    //     setData2(items2);
    // }, []);

    return (
        <div className='prodmain'>
            <div class="prodtag1">
                <div class="deal">Day Of The <span>Deal</span></div>
                <div class="proddata">Don`t wait. The time will never be just right.</div>
            </div>

            <div class="prodcards">
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <div class="prod1" data-aos="zoom-in">
                                    <div class="saletag">SALE</div>
                                    <div class="prodimg">
                                        <img src={item.src} alt="" />
                                        <div class="fouricon">
                                            <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                            <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                            <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                            <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                                        </div>
                                    </div>
                                    <div class="prodinfo">
                                        <div class="itemtag1">{item.name}</div>
                                        <div class="itemtag2">{item.info}</div>
                                        <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                                        <div class="prodprice"> $ {item.price1}.00 <del>$ {item.price2}.00</del> </div>
                                    </div>
                                </div>


                            </>
                        )
                    })
                }
            </div>

            <div class="bgsimg" data-aos="zoom-y-out">
                <div class="firstbanner">
                    <h1>Fresh Fruits <br /> Healthy Products</h1>
                    <div class="bntag1">30% off sale <span>Hurry up!!!</span></div>
                    <button className='banbtn'>Shop Now</button>
                </div>
            </div>
            <div class="arrivalstag">
                <div class="deal">New <span>Arrivals</span></div>
                <div class="proddata">Shop online for new arrivals and get free shipping!</div>

                <div class="prodcards">



                    <Link to="/product1"> <div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item6} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Fresh Fruit</div>
                            <div class="itemtag2">Natural Hub Cherry Karonda</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 49.00 <del>$ 65.00</del></div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/product2"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item7} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Foods</div>
                            <div class="itemtag2">Stick Fiber Masala Magic</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 45.00 <del>$ 50.00</del></div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/product3"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item8} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Tuber root</div>
                            <div class="itemtag2">Fresh Organic Ginger Pack</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 2.00 <del>$ 3.00</del></div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/product4"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item9} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Foods</div>
                            <div class="itemtag2">Natural Hub Cherry Karonda</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 49.00 <del>$ 65.00</del></div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/product5"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item10} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Fresh Lichi</div>
                            <div class="itemtag2">Fresh juice pack</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 20.00 <del>$ 21.00</del></div>
                        </div>
                    </div> </Link>

                    <Link to="/product6"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item11} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Vegetables</div>
                            <div class="itemtag2">Fresh Organic Broccoli Crowns</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 19.00 <del>$ 24.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product7"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item12} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Dried Fruits</div>
                            <div class="itemtag2">Blue Diamond Almonds Lightly Salted</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 10.00 <del>$ 11.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product8"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item13} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Fresh Blueberries</div>
                            <div class="itemtag2">Blueberries - 1 Pint Package</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 3.00 <del>$ 4.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product9"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item14} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Fresh Coconut</div>
                            <div class="itemtag2">Fresh Brown Coconut</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 15.00 <del>$ 19.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product10"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item15} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Fresh Fruit</div>
                            <div class="itemtag2">Fresh Produce Melons Each</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 7.00 <del>$ 8.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product11"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item16} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Soda</div>
                            <div class="itemtag2">Coca-Cola - 2 L Bottle</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 3.00 <del>$ 4.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product12"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item17} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Fresh Butter</div>
                            <div class="itemtag2">Challenge Spreadable Butter</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 7.00 <del>$ 9.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product13"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item18} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Milk</div>
                            <div class="itemtag2">Fairlife Lactose-Free 2% Milk</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 3.00 <del>$ 4.00</del></div>
                        </div>
                    </div></Link>
                    <Link to="/product14"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item19} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Ketchup</div>
                            <div class="itemtag2">Heinz Tomato Ketchup</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 3.00 <del>$ 5.00</del></div>
                        </div>
                    </div></Link>

                    <Link to="/product15"><div class="prod1" data-aos="zoom-in-up">
                        <div class="saletag">SALE</div>
                        <div class="prodimg">
                            <img src={item20} alt="" />
                            <div class="fouricon">
                                <div class="itemicon1"><i class="fa-regular fa-heart"></i></div>
                                <div class="itemicon1"><i class="fa-regular fa-eye"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-repeat"></i></div>
                                <div class="itemicon1"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                        <div class="prodinfo">
                            <div class="itemtag1">Cookies</div>
                            <div class="itemtag2">Lemon Cream Crunch Cookies</div>
                            <div class="prodicon"> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <span><i class="fa-solid fa-star"></i></span> </div>
                            <div class="prodprice">$ 4.00 <del>$ 5.00</del></div>
                        </div>
                    </div></Link>
                </div>

            </div>
        </div>
    )
}
