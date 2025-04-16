import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item14 from '../media/product14.webp'
import { useState } from "react";
export default function Product9() {
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
                        <img src={item14} alt="Product Image" />
                    </div>
                    <div class="product-info">
                        <h1>Fresh Coconut</h1>
                        <p class="category">Fresh Brown Coconut</p>
                        <p class="price">$ 15.00<span class="old-price">$ 19.00</span></p>
                        <p class="description">
                        Fresh Brown Coconut is a versatile and nutritious fruit, packed with hydrating coconut water and rich, creamy flesh. It’s perfect for making coconut milk, desserts, or enjoying raw for its natural sweetness and health benefits. A great source of fiber and healthy fats, it adds tropical goodness to your diet.
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
