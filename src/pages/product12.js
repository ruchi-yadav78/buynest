import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item17 from '../media/product17.webp'
import { useState } from "react";
export default function Product12() {
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
                        <img src={item17} alt="Product Image" />
                    </div>
                    <div class="product-info">
                        <h1>Fresh Butter</h1>
                        <p class="category">Challenge Spreadable Butter</p>
                        <p class="price">$ 7.00 <span class="old-price">$ 9.00</span></p>
                        <p class="description">
                           Challenge Spreadable Butter offers the rich, creamy taste of real butter with the convenience of easy spreading. Made with high-quality ingredients, it enhances the flavor of toast, bagels, and cooking recipes. Smooth and delicious, it’s perfect for everyday use straight from the fridge.
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
