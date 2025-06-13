import React from 'react'
import '../css/product1.css'
import Headcont from '../component/headcont'
import Footer from '../component/footer'
import item11 from '../media/product11.jpg'
import { useState } from "react";
export default function Product6() {
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
                        <img src={item11} alt="Product Image" />
                    </div>
                    <div className="product-info">
                        <h1>Vegetables</h1>
                        <p className="category">Fresh Organic Broccoli Crowns</p>
                        <p className="price">$ 19.00 <span className="old-price">$ 24.00</span></p>
                        <p className="description">
                        Fresh Organic Broccoli Crowns are rich in vitamins, fiber, and antioxidants, making them a nutritious addition to any meal. Grown without pesticides, these tender and flavorful crowns support overall health and immunity. Perfect for steaming, roasting, or adding to salads, they bring natural goodness to your diet.
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
