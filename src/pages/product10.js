import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item15 from '../media/product15.jpg'
import { useState } from "react";
export default function Product10() {
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
                        <img src={item15} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Fresh Fruit</h1>
                        <p className="category">Fresh Produce Melons Each</p>
                        <p className="price">$ 7.00<span className="old-price">$ 8.00</span></p>
                        <p className="description">
                        Fresh Produce Melons are naturally sweet, juicy, and packed with hydration, making them a refreshing treat for any occasion. Rich in vitamins, antioxidants, and fiber, they support digestion and overall health. Perfect for snacking, smoothies, or fruit salads, these melons bring a burst of natural flavor to your table.
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
