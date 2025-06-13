import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item9 from '../media/product9.jpg'
import { useState } from "react";
export default function Product4() {
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
                        <img src={item9} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Foods</h1>
                        <p className="category">Natural Hub Cherry Karonda</p>
                        <p className="price">$ 49.00<span className="old-price">$ 65.00</span></p>
                        <p className="description">
                           Natural Hub Cherry Karonda is a nutritious and tangy fruit packed with antioxidants and essential vitamins. Its unique sweet-sour taste makes it perfect for pickles, jams, and traditional recipes. Sourced naturally, it supports digestion and overall well-being while adding a refreshing burst of flavor to your diet. </p>
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
