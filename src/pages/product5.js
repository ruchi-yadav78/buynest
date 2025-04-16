import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item10 from '../media/product10.jpg'
import { useState } from "react";
export default function Product2() {
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <div>
            <Headcont />
            <div class="itemsbody">
                <div class="product-card">
                    <div class="product-image">
                        <img src={item10} alt="Product Image" />
                    </div>
                    <div class="product-info">
                        <h1>Fresh Lichi</h1>
                        <p class="category">Fresh juice pack</p>
                        <p class="price">$ 20.00 <span class="old-price">$ 21.00</span></p>
                        <p class="description">
                        Fresh Litchi Juice Pack offers the delightful sweetness of handpicked, juicy litchis in a convenient, ready-to-drink form. Rich in vitamin C and antioxidants, it helps boost immunity and keeps you refreshed. Made without artificial preservatives, it delivers the pure, natural taste of litchis in every sip.
                        </p>
                        <div className="quantity-container">
                            <button className="quantity-btn" onClick={() => changeQuantity(-1)}>-</button>
                            <input
                                type="number"
                                className="quantity-input"
                                value={quantity}
                                readOnly
                            />
                            <button className="quantity-btn" onClick={() => changeQuantity(1)}>+</button>
                        </div>

                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
