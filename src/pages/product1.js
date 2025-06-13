import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item6 from '../media/product6.jpg'
import { useState } from "react";
export default function Product1() {
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
                        <img src={item6} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Fresh Fruit</h1>
                        <p className="category">Natural Hub Cherry Karonda</p>
                        <p className="price">$ 49.00<span className="old-price">$ 65.00</span></p>
                        <p className="description">
                            Natural Hub Cherry Karonda is a tangy and nutritious fruit, perfect for fresh snacking or culinary use. Rich in antioxidants and vitamin C, it boosts immunity and promotes overall health. Its unique tart flavor enhances pickles, jams, and chutneys. Enjoy the fresh, natural taste of this wholesome superfruit!
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
