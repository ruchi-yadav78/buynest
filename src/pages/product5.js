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
            <div className="itemsbody">
                <div className="product-card">
                    <div className="product-image">
                        <img src={item10} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Fresh Lichi</h1>
                        <p className="category">Fresh juice pack</p>
                        <p className="price">$ 20.00 <span className="old-price">$ 21.00</span></p>
                        <p className="description">
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

                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
