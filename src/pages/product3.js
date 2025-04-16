import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item8 from '../media/product8.jpg'
import { useState } from "react";
export default function Product3() {
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
                        <img src={item8} alt="Product Image" />
                    </div>
                    <div class="product-info">
                        <h1>Tuber root</h1>
                        <p class="category">Natural Hub Cherry Karonda</p>
                        <p class="price">$ 2.00<span class="old-price">$ 3.00</span></p>
                        <p class="description">
                        Fresh organic ginger packs contain handpicked, naturally grown ginger roots, free from pesticides and harmful chemicals. Known for its rich aroma and strong, zesty flavor, ginger is a staple in cooking and herbal remedies. It boosts immunity, aids digestion, and has powerful anti-inflammatory properties, making it a must-have in every kitchen. Carefully packed to retain freshness, this organic ginger ensures you get the best quality for your health and taste needs.
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
