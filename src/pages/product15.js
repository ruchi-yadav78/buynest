import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item20 from '../media/product20.webp'
import { useState } from "react";
export default function Product15() {
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
                        <img src={item20} alt="Product Image" />
                    </div>
                    <div class="product-info">
                        <h1>Cookies</h1>
                        <p class="category">Lemon Cream Crunch Cookies</p>
                        <p class="price">$ 4.00 <span class="old-price">$ 5.00</span></p>
                        <p class="description">
                        Lemon Cream Crunch Cookies offer a delightful blend of zesty lemon flavor and a satisfying crunchy texture. Filled with smooth, creamy lemon filling, they provide the perfect balance of sweetness and tartness. Ideal for snacking or pairing with tea, these cookies are a refreshing treat for any occasion.
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
