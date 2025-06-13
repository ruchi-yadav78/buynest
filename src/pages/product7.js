import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item12 from '../media/product12.webp'
import { useState } from "react";
export default function Product7() {
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
                        <img src={item12} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Dried Fruits</h1>
                        <p className="category">Blue Diamond Almonds Lightly Salted</p>
                        <p className="price">$ 10.00 <span className="old-price">$ 11.00</span></p>
                        <p className="description">
                        Blue Diamond Almonds Lightly Salted offer a perfect balance of crunch and flavor, with just the right touch of sea salt. Packed with protein, fiber, and healthy fats, they make a nutritious and satisfying snack. These premium-quality almonds are great for on-the-go munching or adding to your favorite recipes.
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
