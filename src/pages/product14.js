import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item19 from '../media/product19.jpg'
import { useState } from "react";
export default function Product14() {
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
                        <img src={item19} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Ketchup</h1>
                        <p className="category">Heinz Tomato Ketchup</p>
                        <p className="price">$ 3.00 <span className="old-price">$ 5.00</span></p>
                        <p className="description">
                        Heinz Tomato Ketchup delivers the perfect blend of ripe tomatoes, tangy vinegar, and signature spices for a rich, classic taste. Its smooth texture and bold flavor make it an essential condiment for burgers, fries, and sandwiches. Made with high-quality ingredients, it’s America’s favorite ketchup for a reason.
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
